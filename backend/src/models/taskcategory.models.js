import mongoose from "mongoose";
import Task from "./task.models.js";
import Category from "./category.models.js";
const taskCategorySchema = new mongoose.Schema({
    taskId:{
        type:mongoose.Schema.Types.ObljectId, ref:Task
    } ,
    categoryId: {
        type:mongoose.Schema.Types.ObljectId, ref:Category
    }//foreign key
});
const TaskCategory = mongoose.model('TaskCategory',taskCategorySchema)
export default TaskCategory