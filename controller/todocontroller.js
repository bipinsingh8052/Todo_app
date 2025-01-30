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
const deletePage =async(req,res)=>{
    let id = req.params.id;
    const data =await todoMongoose.findByIdAndDelete(id)
res.send("deleted succefful")
}
const updatepage=async(req,res)=>{
    const id =req.params.id;
    // const id =req.params.id;
    const {title,description}=req.body
    const data =await todoMongoose.findByIdAndUpdate
    (
        {_id:id},
        {title,description,updateAt:Date.now()}
    );

    res.send(data)
}

// fetch data from id  you can also say it search data from id  
// search from Url in this code main work
// 
const searchPage=async(req,res)=>{
    const id =req.params.id;
    // const id =req.params;
    const data  = await todoMongoose.findById({_id: id})
    res.send(data)
}
module.exports={
    homePage,
    InserPage,
    deletePage,
    updatepage,
    searchPage
}