const mongoose=require("mongoose")

const docter=mongoose.Schema({
    name:String,
    image:String,
    specialization:String,
    experience:Number,
    location:String,
    date:String,
    slots:Number,
    fee:Number

})
const DoctorModel=new mongoose.model("doctors",docter)
module.exports=DoctorModel