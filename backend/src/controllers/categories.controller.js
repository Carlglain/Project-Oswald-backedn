import Category from "../models/category.models.js";
 export const addCategory = async(req,res)=>{
    const categoryName = req.body.categoryName
    try{
        const newCategory = new Category({
            categoryName: categoryName
        })
        await newCategory.save();
        res.status(200).send(newCategory)
    }
    catch(err){
        console.error(err)
    }
}
export const displayAllCategory = async(req,res)=>{
    try{
        const result = await Category.find({})
        if(!result){
            return res.status(404).json({message:"No categories found"})
        }
        res.status(200).json({result})
    }
    catch(err){
        console.error(err)
        res.status(500).json({message:"Error retrieving categories"})
    }
}
//delete category
export const deleteCategory = async(req,res) => {
    const {catId} = req.params
    try{
        const result = await Category.findByIdAndDelete(catId)
        res.status(200).send({message:"Category deleted successfully"});
    }
    catch(err){
        console.log("Error deleting category: " + err)
    }
}
//update category
export const updateCategory = async(req,res)=>{
    const {catId} = req.params
    const {categoryName} = req.body
    try{
        const updatedCategory = await Category.findByIdAndUpdate(catId,{categoryName},{new:true})
        if(!updatedCategory){
            return res.status(404).json({message:"category update failed"})
        }
        res.status(200).json( {message: ` successfully updated to ${updatedCategory.categoryName}`})
    }
    catch(err){
        console.error(err)
        return res.status(500).json({message:"Error updating category"})
    }
}
