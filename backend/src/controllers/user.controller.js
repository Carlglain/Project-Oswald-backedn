import User from "../models/user.models.js";

export const addUser  = async(req,res) =>{
    const {userName, userAddress} = req.body;
    if(!userName ){
      return res.status(400).json({message: "userName is required"});
    }
    const newUser  = new User({
      userName,
      userAddress
    }) 
    try { 
      await newUser.save()
      res.status(200).send(newUser)
    } catch (error) {
    console.log(error)
    }
}

//Searching for specific user
export const displayUser = async(req,res,next) => {
  const {userId} = req.params
  try{
    const resulst = await User.findById(userId)
    if (!resulst){
      res.status(404).json({message: `User with id ${userId} not found`});
    }
    res.status(200).json({resulst});
  }
  catch(err){
    return next(err);
  }
}
//Searching all users
export const disPlayAllUsers = async (req, res,next ) => {
  try {
    const allUsers = await User.find({});
    if (!allUsers) {
      return res.status(404).json({ message: "No users found." });
    }
    res.status(200).json({ allUsers });
  }
  catch (err) {
    return next(err);
  }
}

// deleting a user
export const deleteUser = async(req, res) => {
  const {userId} = req.params
  try{
    const results = await User.findByIdAndDelete(userId)
    res.status(200).json({ message:`User ${results} deleted successfully`});
  }
  catch(err){
    console.error(err)
  }
}
//update a user
export const updateUser = async(req,res) => {
  const {userId} = req.params
  const {userName,userAddress} = req.body
  try{
    const updatedUser = await User.findByIdAndUpdate(userId, {userName,userAddress}, {new: true})
    res.status(200).json({message:`User ${updatedUser.userName} updated successfully`});
  }
 catch(err){
    console.error(err)
    res.status(500).json({message:"Error updating user"});
  }

}