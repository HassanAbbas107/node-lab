const express =require("express");
const { request } = require("node:http");
const app = express();



app.get("/",(requset,response)=>{
    response.sendFile(__dirname+"/views/Home.html")
})

app.get("/about",(requset,response)=>{
    response.sendFile(__dirname+"/views/index.html")
})
app.get("/test",(requset,response)=>{
    response.sendFile(__dirname+"/views/test.html")
})


app.listen(3000,()=>{


})