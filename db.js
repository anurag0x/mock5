const mongoose=require("mongoose")
require("dotenv").config()

const dbconnection=mongoose.connect("mongodb+srv://anurag:anuragx@cluster0.mwf7h6h.mongodb.net/doctor")

module.exports=dbconnection