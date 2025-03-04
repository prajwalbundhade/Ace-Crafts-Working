const express = require("express");
const router = express.Router();
const Post = require("../models/Post"); // Adjust path if necessary

// Initialize order values
router.post("/initialize", async (req, res) => {
  try {
    const posts = await Post.find();

    for (let i = 0; i < posts.length; i++) {
      posts[i].order = i;
      await posts[i].save();
    }

    res.status(200).json({ message: "Order initialized successfully!" });
  } catch (error) {
    console.error("Error initializing order:", error);
    res.status(500).json({ error: "Failed to initialize order." });
  }
});

// Update order on drag-and-drop
router.post("/update", async (req, res) => {
  const { draggedPostId, newPosition } = req.body;

  try {
    const posts = await Post.find().sort({ order: 1 });

    const draggedPost = posts.find(post => post._id.equals(draggedPostId));
    if (!draggedPost) return res.status(404).json({ error: "Post not found." });

    posts.splice(posts.indexOf(draggedPost), 1);
    posts.splice(newPosition, 0, draggedPost);

    for (let i = 0; i < posts.length; i++) {
      posts[i].order = i;
      await posts[i].save();
    }

    res.status(200).json({ message: "Order updated successfully!" });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ error: "Failed to update order." });
  }
});

// This route will fetch all posts sorted by the order field
router.get("/new-all-post", async (req, res) => {
  try {
    const posts = await Post.find().sort({ order: 1 }); // Sort by the order field
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts." });
  }
});
module.exports = router;
