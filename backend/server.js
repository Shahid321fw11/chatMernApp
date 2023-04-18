const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv")
dotenv.config();
const app = express();

app.get('/',(req,res)=>{
    res.send("Api is Running")
})
app.get('/api/chat/',(req,res)=>{
    res.send(chats)
})
app.get('/api/chat/:id',(req,res)=>{
    const singleChat = chats.find((item)=>item._id===req.params.id)
    res.send(singleChat)
})


const port  = process.env.PORT || 8000 ;
app.listen(5000, console.log(`server running on port ${port}`))