const express = require("express")
const app = express()
const allPhonesData = require("./data/phones.json")

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get("/phones",(req,res,next)=>{
    res.json(allPhonesData)
})

app.get("/phones/:id",(req,res,next)=>{

   const phoneId= req.params.id   
   
   const phoneDetails = allPhonesData.filter(phoneObj=>(phoneObj.id.toString()===phoneId)) 

   res.json(phoneDetails)

})

app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})