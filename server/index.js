const express = require("express")
const app = express()
const allPhonesData = require("./data/phones.json")


app.get("/phones",(req,res,next)=>{
    res.json(allPhonesData)
})

app.get("/phones/:id",(req,res,next)=>{

   const phoneId= req.params.id   
   
   const phoneDetails = allPhonesData.filter(phoneObj=>(phoneObj.id.toString()===phoneId)) 

   res.json(phoneDetails)
   
})

app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})