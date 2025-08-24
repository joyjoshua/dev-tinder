const express = require('express');

const app = express();

app.get("/", (req, res)=> {
    res.send("Welcome to Dev Tinder");
});

/*
Playing around with express by creating more routes

app.get("/hello", (req, res)=> {
    res.send("Hello bro");
});

app.get("/test", (req, res)=> {
    res.send("Test bro");
});

*/


app.listen(3000, ()=> {
    console.log('Server is running at PORT 3000');
});