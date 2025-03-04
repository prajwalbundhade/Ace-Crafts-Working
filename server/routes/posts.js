const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

// Create a new post
router.post("/new", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: "Error creating post", error: error.message });
  }
});

// Get all posts
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find(); // Fetch all posts
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching posts", error: error.message });
//   }
// });

// New route for fetching posts ordered by 'order'
router.get("/new-all-post", async (req, res) => {
  try {
    const posts = await Post.find().sort({ order: 1 }); // Sort posts by 'order' field
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
});

// Edit a post by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: "Error updating post", error: error.message });
  }
});

// Get a single post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); // Find post by ID
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post); // Return post
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error: error.message });
  }
});


// DELETE /:id
router.delete("/:id", async (req, res) => {
  try {
    const postId = req.params.id;  // MongoDB ID
    const deletedPost = await Post.findByIdAndDelete(postId);  // Using MongoDB ID (_id)

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);  // Log error to debug
    res.status(500).json({ message: "Error deleting post", error: error.message });
  }
});

module.exports = router;
