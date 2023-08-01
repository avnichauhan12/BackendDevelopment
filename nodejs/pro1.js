const express=require("express");
const a=express()
a.get("/",(req,res)=>{
    res.send("hello world");
})
a.listen(7000,()=>{
    console.log("working");
});