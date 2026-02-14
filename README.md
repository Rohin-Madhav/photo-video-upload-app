# Photo & Video Upload Desktop Application (CEF + MERN)

A full-stack desktop media management application that allows users to upload, view, retrieve, and manage photos and videos.  
The project is built using the **MERN stack** and wrapped into a **desktop application using Chromium Embedded Framework (CEF)**.

---

## 🚀 Project Overview

This application demonstrates an **end-to-end working system**:
- Media upload from frontend
- Backend processing and storage
- Cloud-based media hosting
- Desktop application integration

The focus of this project is **functionality**, not UI design.

---

## 🧩 Tech Stack

### Frontend
- React (Vite)
- JavaScript
- HTML & CSS

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Cloudinary (media storage)

### Desktop
- Chromium Embedded Framework (CEF)

### Deployment
- Frontend: Netlify
- Backend: Render

---

## ✨ Features

- Upload images and videos
- Store media securely using Cloudinary
- Save metadata in MongoDB
- View uploaded media in a gallery
- Soft delete media (non-destructive removal)
- Desktop application built using CEF
- Deployed frontend and backend (production-ready)

---

## 🖥️ Desktop Application (CEF)

The desktop version of the application is created using **Chromium Embedded Framework (CEF)**, which embeds the deployed frontend into a native Windows application.

### Important Notes:
- The CEF application loads the deployed frontend URL.
- The desktop executable requires additional CEF runtime files (DLLs, resources).
- Startup URL is passed using a runtime argument (`--url`).

---

## 🎥 Video Playback Note (Important)

- Image upload and viewing work correctly in both browser and CEF.
- Video upload, storage, and retrieval work correctly.
- Video playback works fully in standard web browsers.
- MP4/H.264 video playback in CEF depends on codec support, which is disabled by default in standard CEF builds.
- This can be enabled by building CEF with proprietary codec support if required.

This limitation is documented and does not affect backend or frontend functionality.

---

## 🌐 Live Demo Links

- **Frontend (Web App):**  
  https://chromadrive.netlify.app

- **Backend (API):**  
  https://photo-video-upload-app.onrender.com

---

## 📦 Submission & Executable Note

Due to platform upload size and security restrictions:
- Executable (`.exe`) uploads may be blocked or limited.
- The full runnable CEF desktop package includes additional runtime files.
- The deployed frontend and backend links are provided for complete verification of functionality.

---

## 🧠 Learning Outcomes

- Built a real-world MERN stack application
- Implemented file uploads and cloud storage
- Handled CORS, deployment, and environment configs
- Integrated a web application into a desktop app using CEF
- Debugged real production issues independently

---

## 📌 Conclusion

This project demonstrates the ability to:
- Design and implement a full-stack application
- Deploy and manage production services
- Integrate web technologies into a desktop environment
- Make informed engineering decisions under constraints

---

## 👤 Author

**Rohin Madhav**

---

## 📜 License

This project is for educational and internship evaluation purposes.
