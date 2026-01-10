Talkie - Real-Time Chat App

Talkie is a modern, real-time chat application built for seamless communication. Users can sign up, log in, and chat instantly with others in real-time. The app is responsive and works on both desktop and mobile devices.

Features

Real-time messaging using WebSockets

User authentication (Sign up / Log in)

Profile management (Update profile picture and details)

Responsive design for desktop and mobile

Easy to deploy and use

Tech Stack

Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Atlas or local)

Authentication: JWT (JSON Web Tokens)

File Storage: Cloudinary (for profile images)

Installation

Clone the repository:

git clone https://github.com/riasharma17/Talkie-Real-Time-Chat.git
cd Talkie-Real-Time-Chat


Install dependencies for backend and frontend:

# Backend
cd server
npm install

# Frontend
cd ../client
npm install


Set up environment variables:

Create a .env file in the backend folder with the following:

MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Usage

Start the backend server:

cd server
npm run dev


Start the frontend:

cd ../client
npm start


Open your browser and visit:

http://localhost:3000

Deployment

You can deploy Talkie using platforms like:

Vercel (for frontend)

Render / Railway / Heroku (for backend)

MongoDB Atlas for cloud database

Make sure to configure the environment variables in your deployment settings.

Contributing

Contributions are welcome!
To contribute:

Fork the repository

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add feature")

Push to your branch (git push origin feature-name)

Open a Pull Request

License

This project is MIT Licensed.
