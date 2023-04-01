const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');
const path = require('path'); 

router.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

router.get('/contactus',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
})

router.post('/success',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
})
module.exports = router;