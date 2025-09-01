const express = require('express');
const app = express();
const {connectDB} = require('./config/database');
const {User} = require('./models/user');

app.use(express.json());

app.post('/signup', async (req, res) => {

    const user = new User(req.body);

    try {
        await user.save();
        res.send("User added successfully");
    } catch (err) {
        res.status(400).send('Error while creating an error', err.message);
    }
});

app.get('/user', async(req, res) => {
    const userEmail = req.body.email;

    try {
        const users =  await User.find({email: userEmail});
        
        if(users.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.send(users);
        }
    } catch (err) {
        res.status(400).send('Yikes, something went wrong');
    }
});

//feed api

app.get("/myFeed", async(req, res) => {
    try {
        const myFeed = await User.find({});

        if(myFeed.length === 0) {
            res.status(404).send("Your feed is empty");
        } else {
            res.send(myFeed);
        }
    } catch(err) {
        res.status(400).send('Something went wrong while fetching your feed');
    }
});

//delete api

app.delete("/user", async(req, res) => {
    const userId = req.body.id;
    try {
        const user = await User.findByIdAndDelete(userId);
        res.send('User deleted successfully')
    } catch(err) {
        res.status(400).send('Something went wrong while deleting the user');
    }
});

//update api

app.patch("/user", async(req, res) => {
    const data = req.body;
    try {
        if(data.id) {
            const user = await User.findByIdAndUpdate(data.id, data, {returnDocument: 'after'});
            console.log(user);
            res.send('user updated successfully');
        } else {
            throw  new Error('user not found');
        }
    } catch(err) {
        res.status(400).send('Something went wrong while updating the user');
    }
});

connectDB().then(()=> {
    console.log('DB connection established');
    app.listen(3000, ()=> {
    console.log('Server is running at PORT 3000');
}); 
}).catch(err => {
    console.log('DB connection failed', err);
});