require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is not defined in environment variables");

    const options = {
      serverSelectionTimeoutMS: 10000,
    };

    await mongoose.connect(uri, options);
    console.log(`✅ MongoDB Connected`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    if (error && error.message && error.message.includes("querySrv")) {
      console.error(
        "→ SRV DNS lookup failed. If using a mongodb+srv URI, ensure your environment can resolve SRV records and that DNS (port 53) isn't blocked."
      );
      console.error(
        "  - Try running: nslookup -type=SRV _mongodb._tcp.cluster0.racngkg.mongodb.net"
      );
      console.error(
        "  - Or replace the +srv connection string with a standard mongodb:// host:port string from Atlas connection details."
      );
    }
    process.exit(1);
  }
};

module.exports = connectDB;
