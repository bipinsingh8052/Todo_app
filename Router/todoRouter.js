const express=require("express");
const route=express.Router();
const todocontroller =require("../controller/todocontroller")
route.get("/home",todocontroller.homePage)
route.post("/insert",todocontroller.InserPage)
route.delete("/delete/:id",todocontroller.deletePage)
route.put("/update/:id",todocontroller.updatepage)
route.get("/search/:id",todocontroller.searchPage)

module.exports=route;