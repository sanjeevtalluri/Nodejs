const express = require('express');
const router = express.Router();
const store = require("store2");
const fs = require('fs');

router.get('/', (req, res) => {
    if (fs.existsSync('message.txt')) {
        fs.readFile('message.txt', 'utf8', (err, data) => {
            res.send("<h1>"+data+"</h1><form onsubmit='document.getElementById(`user`).value=localStorage.getItem(`user`)' method='post' action='/'><input type='text' hidden id='user' name='user'><input type='text' name='message'><button>message</button></form>");
        })
    }
    else{
        res.send("<h1>No chats exists</h1><form onsubmit='document.getElementById(`user`).value=localStorage.getItem(`user`)' method='post' action='/'><input type='text' hidden id='user' name='user'><input type='text' name='message'><button>message</button></form>");
    }
    
});

router.post('/', (req, res) => {
    let user = req.body.user;
    const message = req.body.message;
    if(!user){
        user = 'annonymous';
    }
    const userMessage = user + " : " + message+"\n";
    fs.appendFile('message.txt', userMessage, function (err) {
        res.redirect('/');
    });
});
module.exports = router;