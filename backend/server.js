const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const mediaRoutes = require("./routes/mediaRoutes");

connectDB();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"*"
}));

app.use("/api/media", mediaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running : ${PORT}`);
});
