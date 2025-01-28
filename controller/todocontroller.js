const todoMongoose =require("../Models/TodoModel")
const homePage=(req,res)=>{
    res.send("home page");
}
const InserPage=(req,res)=>{
    res.send("INsert page")
}

module.exports={
    homePage,
    InserPage
}