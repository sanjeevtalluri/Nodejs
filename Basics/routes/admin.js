const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');
const path = require('path'); 

router.get('/add-product',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

router.post('/add-product',(req,res)=>{
    console.log(req.body.title);
    res.redirect('/');
})

module.exports = router;