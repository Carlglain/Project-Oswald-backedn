import mongoose from "mongoose";
import User from "./user.models.js";
const taskSchema = new mongoose.Schema({
    taskTitle:{
        required: true,
        type: 'string'
    },
    taskContent:{
        type: 'string'
    },
    // isCompleted:{
    //     required: true,
    //     type: 'boolean'
    // },
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId, ref: "User"
    //     //Foreign key
    // }


})
const Task = mongoose.model('Task',taskSchema);
export default Task;
