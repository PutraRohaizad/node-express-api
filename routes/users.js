const express = require('express');
const router = express.Router();
const users = require('../data');


router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const user = users.filter(user => user.id === parseInt(req.params.id));
    res.json(user);
});

router.post('/', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
    }

    console.log("New user added :", user);
    users.push(user);
    res.json(users);
});

router.put('/:id', (req, res) => {

    const findUser = users.some(user => user.id === parseInt(req.params.id))

    updUser = req.body;
    if (!findUser) return res.status(400).json({ msg: "User not found" });

    users.forEach(user => {
        if(user.id === parseInt(req.params.id)) {
            user.name = updUser.name ? updUser.name : user.name,
            user.email = updUser.email ? updUser.email : user.email      
        }
    });
   
    console.log(`User with the id of ${req.params.id} have been updated`);
    res.json(users);
});

router.delete('/:id', (req, res) => {
    const findUser = users.some(user => user.id === parseInt(req.params.id))
    if (findUser){
        res.json({msg : `User ${req.params.id} have been deleted`, user:  users.filter(user => user.id !== parseInt(req.params.id))})
    } else{
        return res.status(400).json({ msg: "User not found" });
    }


});


module.exports = router;