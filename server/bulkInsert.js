const mongoose = require("mongoose");
const connectDB = require("./config/db"); // Import your MongoDB connection function
const Post = require("./models/Post"); // Import your Post model (make sure the path is correct)

connectDB(); // Connect to the database

const data = [
  {
    index: 1,
    title: 'Minecraft But Super = Money',
    category: 'Minecraft But Mods & Plugins',
    state: 'Mod',
    imagePath: 'https://img.youtube.com/vi/9wDWJZEPWvQ/maxresdefault.jpg',
    description: 'Version - 1.20.1 forge',
    buyNow: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YQ2QCEL4GZ6VL',
    ytLink: 'https://www.youtube.com/watch?v=9wDWJZEPWvQ',
    price: '80$',
    bookNow: '',
  },
];

async function bulkInsert() {
  try {
    // Insert many posts at once
    const result = await Post.insertMany(data);

    console.log(`${result.length} documents were inserted successfully`);
    console.log(result); // Optionally log the inserted data

    // Close the connection after the operation
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting documents:", error);
    mongoose.connection.close();
  }
}

bulkInsert();
