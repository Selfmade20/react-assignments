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
    const selectedEvent = req.body.selectedEvent;
    const email = req.body.email;

    if (firstName.trim().length < 1) {
        return res.status(400).json({ 'message': "Please enter First Name" });
    }
    if (lastName.trim().length < 1) {
        return res.status(400).json({ 'message': "Please enter Last Name!" });
    }
    if (selectedEvent.trim().length < 1) {
        return res.status(400).json({ 'message': "Please select event Last N!" });
    }
    const newUser = new User({
        firstName,
        lastName,
        selectedEvent,
        email,
    });

    try {
        await newUser.save()
        return res.send(newUser).json("Event Booked");
    } catch (err) {
        return res.status(400).json("Error:" + err)
    }

});




module.exports = router;