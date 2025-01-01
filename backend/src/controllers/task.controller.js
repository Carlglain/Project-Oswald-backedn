import { response } from "express";
import Task from "../models/task.models.js";

//post request to creat a task
export const addTask = async(req,res)=>{
    const {taskTitle, taskContent} = req.body;
    try{
        const newTask = new Task({
            taskTitle: taskTitle,
            taskContent: taskContent
        })
        await newTask.save()
        res.status(200).send(newTask)
    }
    catch(err){
        console.log(err);
    }
}

//get request to display all tasks
export const displayAllTasks = async (req, res, next) => {
    try {
        const allTasks = await Task.find({});

        if (!allTasks) {
            return res.status(404).json({ message: "No tasks found." });
        }

        res.status(200).json({ allTasks });
    } catch (err) {
        return next(err);
    }
};

//get request to display particular task
export const displaySpecificTask = async(req, res,next) => {
    const {taskId} = req.params
    try{
        const results = await Task.findById(taskId)
        if(!results){
           return res.status(404).json({message: `Task with id ${taskId} not found`});
        }
        res.status(200).json({results});
    }
    catch(error){
        return next(error);
    }
}
//deleting a specific task 
export const deleteTask = async (req,res) => {
    const {taskId} = req.params
    try{
        const results = await Task.findByIdAndDelete(taskId)
        res.status(200).json({message:'Task deleted successfully'})
    }
    catch(err){
        console.log(err)
    }
}
//deleting all tasks
export const deleteAllTask = async(req,res) =>{
    const {taskId} = req.params
    try{
        const resulsts = Task.deleteMany(taskId)
        res.status(200).json({message:"Successfully deleted all tasks"})
    }
    catch(err){
        console.error(err)
    }
}
// update task 
export const updateTask = async(req,res)=>{
    const {taskId} = req.params
    const {taskTitle,taskContent} = req.body
    try{
        const updatedTask = await Task.findByIdAndUpdate(taskId,{taskTitle,taskContent},{new:true})
        if(!updatedTask){
            return res.status(404).json({message: "Task not found"})
        }
        res.status(200).json({message: ` ${updatedTask.taskTitle} updated successfully`})
    }
    catch(err){
        console.error(err)
        return res.status(500).json({message:"An error occured while updating task"})
    }

}