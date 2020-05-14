const express = require('express');
const router = express.Router();
let User = require('../models/users');

router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
});

router.post('/add', async (req, res) => {
    try {
        const username = req.body.username;
        const newUser = new User({
            username
        });
        await newUser.save();
        res.json('User added!');
    } catch (error) {
        res.status(400).json('Error: ' + error);
    }
})

module.exports = router;