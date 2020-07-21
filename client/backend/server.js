const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = require('./user');

mongoose.connect(
    "mongodb+srv://Selfmade20:Selamolela1@cluster0.jcmpp.mongodb.net/Authentification?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("MongoDB database connected!")
    }
);

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser("secretcode"))

// Routes
app.post("/login", (req, res) => {
    console.log(req.body);
})

app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async(err, doc) => {
        if (err) throw err;
        if (doc) res.send("User already Registered");
        if (!doc) {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            });
            await newUser.save();
            res.send("User created");
        }
    });
});

app.get("/user", (req, res) => {
    console.log(req.body);
})


app.listen(4000, () => {
    console.log(`Server has started on port ${4000}`)
})