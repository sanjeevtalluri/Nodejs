const express = require('express');
const router = express.Router();
const rootDir = require('../utils/path');
const path = require('path'); 
const contactusController = require('../controllers/contactus'); 
const successController = require('../controllers/success'); 

router.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

router.get('/contactus',contactusController.getContactus)

router.post('/success',successController.getSuccess)
module.exports = router;