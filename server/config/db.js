const mongoose = require("mongoose");

const connectDB = async () => {

    await mongoose.connect('mongodb+srv://root:Prajwalb231@cluster0.79azz.mongodb.net/ace_craft?authMechanism=DEFAULT')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
  
};

module.exports = connectDB;
