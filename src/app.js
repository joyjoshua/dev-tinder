const express = require('express');

const app = express();

app.get("/user", (req, res)=> {
    //Fetching User list from DB
    res.send({firstName: 'john', lastName: 'doe'});
});

app.post("/user", (req, res)=> {
    //Creating a new user
    res.send("New User created successfully!");
});

app.delete("/user", (req, res)=> {
    //Deleting a user
    res.send("User deleted successfully");
});

app.listen(3000, ()=> {
    console.log('Server is running at PORT 3000');
});