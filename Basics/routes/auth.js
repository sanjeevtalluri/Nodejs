const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{

    res.send("<form onsubmit='localStorage.setItem(`user`, document.getElementById(`username`).value)' method='post' action='/login'><input type='text' id='username' name='name'><button>login</button></form>")
})

router.post('/login',(req,res)=>{
    const user = req.body.name;
    res.redirect('/');
})

module.exports = router;