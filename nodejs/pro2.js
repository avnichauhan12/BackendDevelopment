const fs=require("fs")
fs.readFile("pro1.js",'utf-8',(err,txt)=>{
    console.log(txt)
});
console.log(performance.now());
//console.log(txt);