const express=require("express");
const route=express.Router();
const todocontroller =require("../controller/todocontroller")
route.get("/home",todocontroller.homePage)
route.post("/insert",todocontroller.InserPage)


module.exports=route;