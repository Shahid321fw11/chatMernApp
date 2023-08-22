# ChitChat App

ChitChat is a modern MERN stack chat application that enables seamless real-time communication using Socket.IO. Whether you're engaging in one-on-one conversations or reaching out to groups, ChitChat's intuitive interface and dynamic features bring people together effortlessly.

# Getting Started

Welcome to the ChitChat app! This guide will help you set up and run both the frontend and backend components of the application.

## Prerequisites

Before you begin, ensure you have Node.js (v14 or higher) and MongoDB (for the backend) installed.

## Frontend Setup

1. Navigate to the frontend directory:

```bash
cd .\frontend\
```

2. Install frontend dependencies:

```bash
npm install
```

3. **Socket.io Configuration:**
   If you're running the frontend locally, you need to configure Socket.io.

Open the `SingleChat.js` file located at `./frontend/src/Components/`.

Inside `SingleChat.js`, locate the 'ENDPOINT' variable and modify it as follows:

- For local use: Change 'ENDPOINT' to your backend URL (e.g., http://localhost:5000).
- For hosted use: Change 'ENDPOINT' to your hosted URL.

4. Start the frontend development server:

```bash
npm start
```

The frontend should now be accessible at http://localhost:3000.

## Backend Setup

1. Navigate to the backend directory:

```bash
cd .\backend\
```

2. Install backend dependencies:

```bash
npm install
```

3. **Configure YOUR Environment Variables:**  
   Create a `.env` file in the `backend` directory if it doesn't exist, and set the following necessary environment variables:

```plaintext
PORT="Enter your port number"
MONGO_URI="Enter your connection string"
JWT_SECRET="Enter your key"
NODE_ENV="Enter your environment" // not necessary for local Setup.
```

4. Start the backend server:

```bash
npm start
```

The backend server should now be running at http://localhost:5000

## Using ChitChat

With both the frontend and backend servers up and running, open your web browser and visit http://localhost:3000 to access the ChitChat app. Enjoy real-time conversations with friends and groups!

# Frontend

Welcome to the frontend of the ChitChat app! This section provides an overview of the libraries and technologies used to build the frontend component of the project.

## Technologies Used

- **React** - A popular JavaScript library for building user interfaces.
- **Chakra UI** - A simple, modular UI component library for React applications.
- **Axios** - A promise-based HTTP client for making API requests.
- **Framer Motion** - A motion library for creating animations and transitions in React applications.
- **React Router DOM** - A library for handling routing in React applications.
- **React Lottie** - An animation library that renders Lottie animations in React applications.
- **React Notification Badge** - A library for adding notification badges to components.
- **React Scrollable Feed** - A library for creating scrollable feeds with dynamic content.
- **Socket.io Client** - A library for real-time communication between the frontend and backend using WebSocket.
- **Web Vitals** - A library for measuring web performance metrics.

# Backend

Welcome to the backend of the ChitChat app! This section provides an overview of the libraries and technologies used to build the backend component of the project.

## Technologies Used

- **Node.js** - A runtime environment for executing JavaScript code on the server.
- **Express** - A web application framework for Node.js.
- **bcryptjs** - A library for hashing passwords and data.
- **dotenv** - A library for loading environment variables from a `.env` file.
- **jsonwebtoken** - A library for creating and verifying JSON Web Tokens (JWT).
- **mongoose** - A MongoDB object modeling tool for Node.js.
- **nodemon** - A utility that monitors for changes in files and automatically restarts the server.
- **Socket.io** - A library for real-time communication between clients and servers using WebSocket.

# Features of the ChitChat App

Welcome to the features documentation of the ChitChat app. Below are the key features implemented in the application:

## Features

1. **User Authentication and Signup**:

   - Secure user authentication and signup functionality.
   - Users can create accounts to access the app.

2. **Profile Picture Upload**:

   - During signup, users can upload their profile picture.
   - Utilizes the Cloudinary platform for efficient image storage.

3. **User Search**:

   - Users can search for existing users by their name or email.

4. **Real-time Chats**:

   - **One-on-One Chat**: Real-time chat functionality between two users.
   - **Group Chat**: Real-time group chat functionality for multiple users.

5. **New Message Notifications**:

   - Users receive notifications when new messages are sent.

6. **User Profile Information**:

   - Display information about the current user and their profile.
   - View other user's profiles.

7. **Real-time Typing Indicator**:

   - Shows when another user is typing a message, similar to WhatsApp.

8. **Navigation Icons**:
   - Back icon: Return to previous tabs.
   - Eye icon (Single Chat):
     - Shows detailed information about the other user in a one-on-one chat.
   - Eye icon (Group Chat):
     - Displays info of all users in the group chat.
     - Allows changing the group name.
     - Enables deleting users from the group.
     - Provides the ability to leave the group.

# Live Demo

Experience ChitChat in action by visiting the live demo:

[ChitChat App](https://chitchatapp-fi5m.onrender.com/)

Simply click the link above or copy and paste it into your web browser to start using ChitChat right away. Explore the real-time messaging, user profiles, group chats, and more!

I hope you enjoy using ChitChat as much as I enjoyed creating it. Feel free to provide feedback or reach out to me with any questions.

Happy chatting!

# Contact Me

Feel free to connect with me via the following platforms. I'd love to hear from you!

- **LinkedIn:** [Connect](https://www.linkedin.com/in/shahid-ansari-7387521b1/)
- **Email:** [sidansari20@gmail.com](mailto:sidansari20@gmail.com)

Whether you have questions, feedback, or simply want to connect, feel free to reach out on either of these platforms. I look forward to chatting with you!

Happy connecting!

# Conclusion

Thank you for exploring the ChitChat app! I hope this README has provided you with a comprehensive overview of the app's features, setup instructions, and ways to connect with me. ChitChat is designed to bring people together through real-time communication, making conversations with friends and groups seamless and enjoyable.

Feel free to experience ChitChat firsthand by visiting the live demo: [ChitChat App](https://chitchatapp-fi5m.onrender.com/). Explore the features, initiate chats, and engage in dynamic conversations.

Should you have any questions, suggestions, or feedback, don't hesitate to reach out to me via [LinkedIn](https://www.linkedin.com/in/shahid-ansari-7387521b1/) or by emailing me at [sidansari20@gmail.com](mailto:sidansari20@gmail.com). You can also find my work on [GitHub](https://github.com/Shahid321fw11), where contributions and collaboration are always welcome.

I appreciate your interest in ChitChat and hope you find it as valuable and enjoyable as I did while creating it. Happy chatting and connecting!

Warm regards,

**Shahid Ansari**
