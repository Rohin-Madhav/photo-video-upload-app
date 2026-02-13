require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const mediaRoutes = require("./routes/mediaRoutes");

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ CORS: allow both localhost (dev) and Netlify (prod)
const allowedOrigins = [
  "http://localhost:5173",
  "https://chromadrive.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman/curl

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use("/api/media", mediaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running : ${PORT}`);
});
