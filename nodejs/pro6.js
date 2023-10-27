const express=require('express');
const app=express();
app.use(function(req,res,next){
    console.log("middleware running");
    next();
})

app.get('/',(req,res)=> {
    res.send("hello backend");
});
app.get('/about',(req,res)=> {
    res.send("about");
});
// dynamic routing
app.get('/home/:a',(req,res)=> {
    res.send(`welcome to dynamic ${req.params.a}`);
});
app.listen(3000);