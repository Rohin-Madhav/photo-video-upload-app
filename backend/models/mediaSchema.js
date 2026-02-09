const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    //  (Broad category)
    category: {
      type: String,
      required: true,
      enum: ["image", "video"], // Restricts to only these two types
      lowercase: true,
    },

    //  Where is it stored? (The path)
    fileUrl: {
      type: String,
      required: true,
      trim: true,
    },

    //  How should frontend display it? (Technical Metadata)
    mimeType: {
      type: String, // e.g., 'image/png' or 'video/mp4'
      required: true,
    },
    fileExtension: {
      type: String, // e.g., '.jpg', '.mp4'
      required: true,
      lowercase: true,
    },
    isDeleted: {
      type: Boolean, // for soft delete
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    originalName: String, // Helpful for downloads
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Media", mediaSchema);
