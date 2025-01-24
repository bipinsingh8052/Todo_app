const express=require("express");
const route=express.Router();
const todocontroller =require("../controller/todocontroller")
route.post("/create",todocontroller.homePage)



module.exports=route;