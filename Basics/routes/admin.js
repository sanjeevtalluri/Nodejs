const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res)=>{
    res.send("<form method='post' action='/admin/add-product'><input type='text' name='title'><input type='number' name='size'><button>Submit</button></form>")
})

router.post('/add-product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;