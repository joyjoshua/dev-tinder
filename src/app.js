const express = require('express');
const app = express();
const {connectDB} = require('./config/database');

connectDB().then(()=> {
    console.log('DB connection established');
    app.listen(3000, ()=> {
    console.log('Server is running at PORT 3000');
}); 
}).catch(err => {
    console.log('DB connection failed', err);
});