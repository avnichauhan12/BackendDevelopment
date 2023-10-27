const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("working");
    res.end("hii");
});
server.listen(8069);