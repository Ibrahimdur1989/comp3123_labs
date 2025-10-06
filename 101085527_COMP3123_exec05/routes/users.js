
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

function readUser(){
    const p = path.join(__dirname, '..', 'user.json');
    return JSON.parse(fs.readFileSync(p, 'utf-8'));
}


router.get('/profile', (req,res) => {
  res.json(readUser());
});


router.post('/login', (req, res) => {
    const { username, password } = req.body || {};
    const u = readUser();

    if(username !== u.username){
        return res.status(400).json({status: false, message: 'User name is invalid'})
    }
    if(password !== u.password){
        return res.status(400).json({status: false, message: 'Password is invalid'})
    }
    return res.json({status: true, message: 'User is valid'})
});



router.get('/logout/:username', (req,res) => {
  res.send(`<b>${req.params.username} successfully logout.<b>`);
});

router.get('/', (req, res) => {
    res.json(readUser());
});

module.exports = router;