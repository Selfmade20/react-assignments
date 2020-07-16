const router = require('express').Router();
let User = require('../models/user.models');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post(async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({
        email,
        password,
    });

    try {
        await newUser.save()
        return res.send(newUser).json("Logged In");
    } catch (err) {
        return res.status(400).json("Error:" + err)
    }

});



module.exports = router;