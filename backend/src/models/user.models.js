import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    userName:{
        required: true,
        type:String
    },
    userAddress:{
        type:String
    },
    

})

const User  = mongoose.model('User',userSchema)
export default User