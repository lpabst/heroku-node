require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const massive = require('massive');

var app = express();
app.use(bodyParser.json());
app.use(cookieParser());


massive({
    host: process.env.HOST,
    database: "ddog0gtsau2890",
    port: 5432,
    user: "bztqfmczxjivqg",
    password: "cfe163e9e823a68a0c65c22c2448be47911eded8ea11463f1eba3e348ebb806a",
    ssl: true
})
    .then(db => {
        app.set('db', db);
    })

app.get('/validateToken/:token', (req, res) => {
    const db = req.app.get('db');
    const token = await db.tokens.insert({ token: req.params.token })
    res.status(200).send({ token })
})

app.listen(process.env.PORT, () => console.log(`Example app running`))