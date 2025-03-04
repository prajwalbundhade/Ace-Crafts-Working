const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/posts");
const orderRoutes = require('./routes/orderRoutes');
const Post = require("./models/Post");
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Allow all origins
// app.use(cors({
  // origin: ['https://dashboard.craftifyproductions.com', 'https://craftifyproductions.com/'],
    // methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],  // Allows these specific methods
    // allowedHeaders: ['Content-Type', 'Authorization'],
  // }));


  // Bulk insert route
// app.post("/bulk-insert", async (req, res) => {
//   const data = [];

//   try {
//     const result = await Post.insertMany(data, { ordered: false });
//     res.status(201).json({
//       message: `${result.length} documents were inserted successfully`,
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error inserting documents",
//       error: error.message,
//     });
//   }
// });
// Routes
app.use("/api", authRoutes);
app.use("/api/posts", postRoutes);
app.use('/api/order', orderRoutes);


// // Initialize order field for all posts
// app.post("/api/order/initialize", async (req, res) => {
//   try {
//     const posts = await Post.find(); // Fetch all posts

//     // Assign unique order values
//     for (let i = 0; i < posts.length; i++) {
//       posts[i].order = i;
//       await posts[i].save(); // Save updated order
//     }

//     res.status(200).json({ message: "Order initialized successfully!" });
//   } catch (error) {
//     console.error("Error initializing order:", error);
//     res.status(500).json({ error: "Failed to initialize order." });
//   }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
