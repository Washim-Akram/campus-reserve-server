const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware's
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Campus Reserve Server is Running.");
});

app.get("/users", (req, res) => {
    res.send("from users get route.");
});

app.listen(port, () => {
    console.log(`Campus Reserve Server is Running On Port: ${port}`);
});
