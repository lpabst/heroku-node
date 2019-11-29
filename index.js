const express = require('express');
const app = express();
const port = 3000;

app.get('/validateToken/:token', (req, res) => {
    console.log("endpoint is working");
    const token = 'some info to send back to the client';
    const responseBody = { token }
    res.status(200).send(responseBody)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))