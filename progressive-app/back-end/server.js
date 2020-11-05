const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 4000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.listen(port, console.log(`Server successfully running on port: ${port}`));
