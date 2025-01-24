const express=require("express");
const route=express.Router();
const todocontroller =require("../controller/todocontroller")
route.get("/home",todocontroller.homePage)



module.exports=route;