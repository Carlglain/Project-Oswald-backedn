import express from 'express';
import { addTask, deleteAllTask, deleteTask, displayAllTasks, displaySpecificTask, updateTask } from '../controllers/task.controller.js';
const router = express.Router();
router.post('/createTask', addTask) //route to create new task
router.get('/displayAllTask', displayAllTasks) //route to display all tasks
router.get('/displaySpecificTask/:taskId', displaySpecificTask) //route to display specific tasks
router.delete('/delteAllTask', deleteAllTask);
router.delete('/deleteTask/:taskId', deleteTask);
router.put('/updateTask', updateTask);
export default router;