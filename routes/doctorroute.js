const express=require("express")
const DoctorModel = require("../models/Doctor")

 const docterrouter=express.Router()


 docterrouter.post("/appointments",async(req,res)=>{
    try {
        const newone=new DoctorModel({...req.body})
        await newone.save()
        return res.status(200).send({msg:"Added Successfull",isok:true})
    } catch (error) {
        console.log(error)
    }
 })
 docterrouter.get("/appointments",async(req,res)=>{
    const {name,specialization,sort}=req.query
    try {
         let conditions={
        }
if(name){
    conditions.name=new RegExp(name,"i")
}
if(specialization){
    conditions.specialization=specialization
}
let sorting
        if(sort){
            sorting=sort=="asc"?1:-1
        }
        if(sorting){
            const data=await DoctorModel.find(conditions).sort({date:sorting})
            return res.status(200).send(data)
        }
       const data=await DoctorModel.find(conditions)
        return res.status(200).send(data)
    } catch (error) {
        console.log(error)
    }
 })
 docterrouter.delete("/appointments/:id",async(req,res)=>{
    
    try {
       await DoctorModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({msg:"Deleted Successfull",isok:true})
    } catch (error) {
        console.log(error)
    }
 })
 docterrouter.patch("/appointments/:id",async(req,res)=>{
    
    try {
       await DoctorModel.findByIdAndUpdate(req.params.id,...req.body)
        return res.status(200).send({msg:"Deleted Successfull",isok:true})
    } catch (error) {
        console.log(error)
    }
 })
 module.exports=docterrouter