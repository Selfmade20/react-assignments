const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post(async (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const selectEvent = req.body.selectEvent;
    const email = req.body.email;

    const newUser = new User({
        firstName,
        lastName,
        selectEvent,
        email,
    });

    try {
        await newUser.save()
        return res.send(newUser);
    } catch (err) {
        return res.status(400).json("Error:" + err)
    }

});




module.exports = router;