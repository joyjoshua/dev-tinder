const express = require('express');
const app = express();
const {connectDB} = require('./config/database');
const {User} = require('./models/user');

app.post('/signup', async (req, res) => {
    const mockUser = {
        firstName: 'joy',
        lastName: 'joshua',
        email: 'joyjoshua@gmail.com',
        password: 'joy@1234',
        age: 24,
        gender: 'M'
    };

    const user = new User(mockUser);

    try {
        await user.save();
        res.send("User added successfully");
    } catch (err) {
        res.status(400).send('Error while creating an error', err.message);
    }
})

connectDB().then(()=> {
    console.log('DB connection established');
    app.listen(3000, ()=> {
    console.log('Server is running at PORT 3000');
}); 
}).catch(err => {
    console.log('DB connection failed', err);
});