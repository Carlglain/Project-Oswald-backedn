import express from 'express';  
import { addCategory, deleteCategory, displayAllCategory, updateCategory } from '../controllers/categories.controller.js';

const router = express.Router();
router.post('/createCategory', addCategory);
router.get('/displayCategory',displayAllCategory)
router.delete('/deleteCategory/:catId', deleteCategory);
router.put('/updateCategory/:catId', updateCategory);
export default router;