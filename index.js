require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/api/postTest", function (req, res) {
    res.status(200).send({ test: process.env.TEST });
});

app.get('/validateToken/:token', (req, res) => {
    res.status(200).send({ token: req.params.token })
})

app.listen(process.env.PORT, () => console.log(`Example app running`))