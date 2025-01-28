const todoMongoose =require("../Models/TodoModel")
const homePage=async(req,res)=>{
    let data =await todoMongoose.find();
    res.send(data);
    // res.send("home page");
}
const InserPage=async(req,res)=>{
    console.log(req.body);
    const {description, title}=req.body;
    const data =await todoMongoose.create({description,title
    })

    res.send(data);
    // res.send("INsert page")
}
const deletePage =(req,res)=>{
    req.send("Delete page")
}
const updatepage=(req,res)=>{
    req.send("update page")
}
module.exports={
    homePage,
    InserPage,
    deletePage,
    updatepage
}