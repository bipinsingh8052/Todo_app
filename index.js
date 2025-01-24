const express =require("express");
const app =express();
const todoRouter=require("./Router/todoRouter")
const mongoose =require("mongoose");




mongoose.connect("mongodb://127.0.0.1:27017//todo")
.then(()=>{
    console.log("Connection succeful");
})
.catch(()=>{
    console.log("not connected error")
})



app.use('/todo',todoRouter);

app.listen(8000,()=>{
    console.log("Run in 8000 port in localhost");
})