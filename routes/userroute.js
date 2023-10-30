const express=require("express")

 const userrouter=express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const UserModel = require("../models/User")
 userrouter.post("/signup",async(req,res)=>{
    const {email,password}=req.body
    try {
        const exist=await UserModel.findOne({email})
        if(exist){
            console.log(exist)
            return res.status(400).send("Already a user please login")
        }else{
            bcrypt.hash(password,5,async(err,hash)=>{
                const user=new UserModel({...req.body,password:hash})
                await user.save()
                return res.status(200).send({mag:"Registered Successfully",isok:true})
            })
        }
    } catch (error) {
        console.log(error)
    }
 })
 userrouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const exist=await UserModel.findOne({email})
        if(exist){
            const verify=bcrypt.compareSync(password,exist.password)
            if(!verify){
                return res.status(400).send("Wrong Credintials")
            }
            token=jwt.sign({msg:"generated"},"masai")
            

            return res.status(200).send({msg:"Login Successfully ",token:token})
        }else{
            return res.status(400).send("User not fount please register")
        }
    } catch (error) {
        console.log(error)
    }
 })


 module.exports=userrouter