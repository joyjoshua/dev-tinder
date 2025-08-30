require('dotenv').config({path: 'src/local.env'});
const mongoose = require('mongoose');

const dbString  = process.env.DB_CLIENT_URI;
const connectDB = async () => {
    await mongoose.connect(dbString);
};

module.exports = {connectDB};