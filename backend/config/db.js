const mongoose = require('mongoose');
const colors=require('colors');
require('dotenv').config();
console.log(process.env.MONGO_URI );

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected'.yellow);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); 
  } 
};

module.exports = connectDB;
