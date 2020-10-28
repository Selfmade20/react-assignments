const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, console.log(`Server successfully running on port: ${port}`));
