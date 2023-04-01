const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes = require('./routes/auth');
const commonRoutes = require('./routes/common');
const rootDir = require('./utils/path');
const path = require('path'); 

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes);


//app.use(loginRoutes);

//app.use(commonRoutes);

app.use('/',(req,res)=>{
    res.status(404).sendFile(path.join(rootDir,'views','page-not-found.html'))
})

app.listen(3000);
