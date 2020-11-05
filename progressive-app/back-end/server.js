const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 4000;
const merchant_model = require('./model/merchant_model')
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(function(req, res, next){
    res.sendHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
})


app.get('/', (req, res) => {
    merchant_model.getUsers()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error);
    })
})


app.listen(port, console.log(`Server successfully running on port: ${port}`));
