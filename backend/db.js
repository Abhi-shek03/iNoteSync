const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI


const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log('\nConnected to MongoDB successfully!!!')
        console.log('Hello Abhishek \nWelcome to Backend Server') 
    } catch (error) {
        console.error('Connection failed!!!')
        process.exit(0);
    }

};

module.exports = connectToMongo;