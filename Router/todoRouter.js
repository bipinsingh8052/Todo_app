const express=require("express");
const route=express.Router();
const todocontroller =require("../controller/todocontroller")
route.get("/home",todocontroller.homePage)
route.post("/insert",todocontroller.InserPage)
route.delete("/delete",todocontroller.deletePage)
route.put("/update",todocontroller.updatepage)


module.exports=route;