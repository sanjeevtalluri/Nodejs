const path = require('path'); 
const rootDir = require('../utils/path');


exports.getContactus = (req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
}