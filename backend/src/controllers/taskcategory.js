import TaskCategory from "../models/taskcategory.models.js";

export const addTaskCategory = async(req,res)=>{
    const {taskId} = req.body;
    try{
    const newTaskCategory = new TaskCategory({
        taskId:taskId,
    }
    )
    await newTaskCategory.save()
}
catch(err){
    console.log(err)
}
}
