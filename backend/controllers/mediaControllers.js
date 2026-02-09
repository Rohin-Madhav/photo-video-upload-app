const Media = require("../models/mediaSchema");
const cloudinary = require("../utils/cloudinary");
const path = require("path");

exports.uploadMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
      folder: "media",
    });

    const fileExtension = path.extname(req.file.originalname).slice(1);

    const category = req.file.mimetype.startsWith("image")
      ? "image"
      : req.file.mimetype.startsWith("video")
        ? "video"
        : "other";

    const media = await Media.create({
      fileName: result.public_id,
      originalName: req.file.originalname,
      mediaType: result.resource_type,
      mimeType: req.file.mimetype,
      fileExtension,
      category,
      fileUrl: result.secure_url,
      fileSize: req.file.size,
    });

    res.status(201).json({
      message: "Media uploaded successfully",
      media,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllMedia = async (req, res) => {
  try {
    const mediaFiles = await Media.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: mediaFiles.length,
      data: mediaFiles,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMediaById = async (req, res) => {
  try {
    const { id } = req.params;

    const media = await Media.findById(id);

    if (!media) {
      return res.status(404).json({
        message: "Media not found",
      });
    }

    res.status(200).json(media);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.softDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const media = await Media.findByIdAndUpdate(
      id,
      {
        isDeleted: true,
        deletedAt: new Date(),
      },
      { new: true },
    );
    if (!media) {
      return res.status(404).json({ message: "Media not found" });
    }
    res.status(200).json({
      message: "Media moved to trash",
      data: media,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
