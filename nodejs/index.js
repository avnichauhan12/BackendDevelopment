const http=require("http");
const server=http.createServer((req,res) => {
    res.end("working");
});
server.listen(6969,"localhost",()=>{
    console.log("server is wprking");
});