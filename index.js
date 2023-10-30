const express=require("express")
const dbconnection = require("./db")
const userrouter = require("./routes/userroute")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const docterrouter = require("./routes/doctorroute")
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())

app.use("/",userrouter)
app.use("/",docterrouter)
app.listen(8080,async()=>{
    
try {
    await dbconnection
    console.log("runnig perfectly")
} catch (error) {
    console.log(error)
}
})