const express =require("express");
const app =express();
const todoRouter=require("./Router/todoRouter")
const mongoose =require("mongoose");

app.set("view engine","ejs");


// it is middleware to parser the data in database where you work on bodu-parser
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/todo")
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