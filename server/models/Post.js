const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    index: {
      type: Number,
      // unique: true,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    mediaContent: {
      type: [{
        imageUrl: String,
        ytLink: String,
        isRealVideo: {
          type: Boolean,
          default: false
        },
        isRefVideo: {
          type: Boolean,
          default: false
        }
      }],
      default: []
    },
    description: {
      type: String,
      default: "",
    },
    buyNow: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    bookNow: {
      type: String,
      default: "",
    },
    newbuynow: {
      type: String,
      default: "",
    },
    order: {
      type: Number,  // New field for shuffle order
      default: 0,    // Default order value, will be updated during shuffle
    }
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

// Auto-increment index field
PostSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastPost = await this.constructor.findOne().sort({ index: -1 });
    this.index = lastPost ? lastPost.index + 1 : 1;
  }
  next();
});

module.exports = mongoose.model("Post", PostSchema);
