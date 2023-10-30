const mongoose=require("mongoose")

const user=mongoose.Schema({
    email:String,
    password:String,
   

})
const UserModel=new mongoose.model("users",user)
module.exports=UserModel