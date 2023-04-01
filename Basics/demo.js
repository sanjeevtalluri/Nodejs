//const http = require('http');
//const route = require('./route');

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("in middleware 1");
    next();
})

app.use((req,res,next)=>{
    console.log("in middleware 2");
    res.send("<h1>This is express js</h1>")
})

app.listen(3000);

//const server = http.createServer(route);
//server.listen(3000);