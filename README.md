# 🎥 DevTube

DevTube is a YouTube-style video-sharing web application built with Node.js, Express, EJS, Socket.io, and Google OAuth authentication.
It allows users to sign in using their Google account, upload videos, and interact with the platform in real-time.

---

## 🔧 Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS Templates, HTML, CSS
- **Authentication:** Passport.js with Google OAuth 2.0
- **Database:** MongoDB with Mongoose
- **Real-Time Communication:** Socket.io
- **Session Management:** express-session
- **Others:** dotenv, module-alias, nodemon

---

## 🚀 Features

- Google-based sign-in using Passport.js
- Upload and manage videos (via MongoDB)
- Real-time notifications using Socket.io
- Clean, responsive UI using EJS templating
- Modular project structure for easy scaling

---

## 📷 Screenshots


### 🏠 Home Page
![Home Page](https://github.com/user-attachments/assets/48fe4d41-6bc8-4e82-ac1a-a2b9e24bcb51)

### 🔐 Login Page
![DevStudio](https://github.com/user-attachments/assets/f4d736ff-7ec1-4b9d-8283-32049ae260a1)

### 📺 Dashboard or Video View
![Account](https://github.com/user-attachments/assets/c7d40e80-d9ad-4ed6-99c3-c038a07bd831)

---
### 🎥 DevTube Demo [![Watch the video: /Media/DevTube Working.mp4]

https://github.com/user-attachments/assets/907244ee-ccfd-429b-b1c8-d5f4bf906fcf

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone git https://github.com/swasthikk/DevTube.git

2. Create .env file
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CALLBACK_URL=http://localhost:3000/api/auth/google/callback
MONGODB_URI=mongodb://localhost:27017/devtube

3. Dependencies
   Install the Dependencies/node-modules
   Connect with Socket.io
4.Run the server
npx nodemon app.js
node app.js

## 📄 Project Report

A detailed project report describing the system architecture, design decisions, and implementation details has been included in the repository.

📂 **Location**: `./Media/report.pdf`

Feel free to open it to understand the inner workings and documentation of DevTube.

