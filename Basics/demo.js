const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send("<form method='post' action='/product'><input type='text' name='title'><input type='number' name='size'><button>Submit</button></form>")
})

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send("<h1>This is express js</h1>")
})

app.listen(3000);
