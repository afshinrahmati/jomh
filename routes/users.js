var express = require('express');
var router = express.Router();

const User = require('../model/user')


router.post('/use', function(req, res) {
    const NEW_USER = new user({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,

    })

    //save
    NEW_USER.save(function(err, user) {
        if (err) return res.status(500).send('writing oowent wrong!')
        return res.json({
            user,
            massage: "User add shod"
        })
    })
})

module.exports = router;