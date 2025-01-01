import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
    categoryName:{
        required: true,
        type: 'string',
    }
});
const Category = mongoose.model('Category', categorySchema);
export default Category;
