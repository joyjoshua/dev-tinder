const express = require('express');
const {authAdmin, userAuth} = require('./middlewares/auth')
const app = express();

app.use('/admin', authAdmin);
app.get('/admin/fetchUsers', (req, res) => {
    res.send('User List is sent successfully');
});
app.delete('/admin/deleteUser', (req, res) => {
    res.send('user deleted successfully');
});

app.get('/user/fetchUserDetails', userAuth, (req, res) => {
    res.send('User detail fetched successfully');
});

app.post('/user/login', (req, res) => {
    res.send('User logged in successfully');
});

app.get('/admin/replicateError', (req, res) => {
    throw new Error('replicaating error');
});

app.use("/", (err, req, res, next) => {
    if(err) {
        res.status(500).send('encountered error, bro. Handled using err in request handler');
    }
})

app.listen(3000, ()=> {
    console.log('Server is running at PORT 3000');
}); 