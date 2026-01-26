# 📚 IELTS Preparation Application

A comprehensive web application for IELTS exam preparation, featuring practice tests and exercises for Reading, Writing, Listening, and Speaking sections.

![IELTS Preparation](https://img.shields.io/badge/IELTS-Preparation-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-18+-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

## 🎯 Overview

This is a full-stack IELTS preparation platform built with:
- **Backend**: Node.js + Express + MongoDB (Mongoose)
- **Frontend**: React + Vite
- **Database**: MongoDB Atlas

The application provides:
- 📖 Reading practice tests
- ✍️ Writing practice tests  
- 🎧 Listening practice tests
- 🗣️ Speaking practice tests
- 👤 User authentication
- 💬 Feedback system
- 👥 Community features

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas account** (or local MongoDB)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DhruvilCG/ielts_preparation.git
   cd ielts_preparation
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```
   
   Or install separately:
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend/vite_app
   npm install
   cd ../..
   ```

3. **Set up environment variables** (Optional but recommended)
   
   Create a `.env` file in the `backend` folder:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/IELTS?retryWrites=true&w=majority
   PORT=5000
   JWT_SECRET=your-secret-key-here
   ```

4. **Start the backend server**
   ```bash
   npm start
   # or
   npm run dev
   ```
   
   The server will run on `http://localhost:5000`

5. **Start the frontend** (in a new terminal)
   ```bash
   npm run frontend
   ```
   
   The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start using the application!

## 📁 Project Structure

```
ielts_preparation/
│
├── backend/                 # Backend server (Express + MongoDB)
│   ├── controllers/        # Route controllers
│   │   ├── answerController.js
│   │   ├── answersController.js
│   │   ├── answerValidationController.js
│   │   ├── feedbackController.js
│   │   ├── ieltsController.js
│   │   └── userController.js
│   ├── models/             # MongoDB models (Mongoose)
│   │   ├── Answer.js
│   │   ├── CorrectAnswer.js
│   │   ├── StudentAnswer.js
│   │   ├── User.js
│   │   └── UserFeedback.js
│   ├── routes/             # API routes
│   │   ├── answerRoutes.js
│   │   ├── answersRoutes.js
│   │   ├── authRoutes.js
│   │   ├── feedbackRoutes.js
│   │   ├── ieltsRoutes.js
│   │   └── userRoutes.js
│   └── server.js           # Main server file (USE THIS)
│
├── frontend/
│   └── vite_app/           # React frontend
│       ├── src/
│       │   ├── components/ # React components
│       │   ├── App.jsx      # Main app component
│       │   └── main.jsx     # Entry point
│       ├── package.json
│       └── vite.config.js
│
├── index.js                # Alternative backend (port 5001) - NOT RECOMMENDED
├── package.json            # Root package.json with scripts
└── README.md               # This file
```

## 🔧 Configuration

### Backend Configuration

The backend server (`backend/server.js`) runs on **port 5000** by default.

**MongoDB Connection:**
- Currently uses hardcoded connection string
- **Recommended**: Move to `.env` file for security
- Connection string format: `mongodb+srv://username:password@cluster.mongodb.net/IELTS`

### Frontend Configuration

The frontend is configured to use:
- **Local development**: `http://localhost:5000` (for some endpoints)
- **Deployed backend**: `https://ielts-preparation-2.onrender.com` (for most endpoints)

**To use local backend:**
1. Create `frontend/vite_app/src/config/api.js`
2. Set `API_BASE_URL = "http://localhost:5000"`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login

### IELTS Tests
- `GET /api/ielts/reading` - Get reading test
- `GET /api/ielts/writing` - Get writing test
- `GET /api/ielts/listening` - Get listening test
- `GET /api/ielts/speaking` - Get speaking test

### Feedback
- `POST /api/feedback` - Submit feedback

### Answers
- `POST /api/answers` - Submit answers
- `GET /api/answers/:id` - Get answer by ID

## 🛠️ Available Scripts

### Root Directory

```bash
# Start backend server (recommended - uses backend/server.js)
npm start

# Start backend server (alternative)
npm run dev

# Start root index.js server (port 5001 - not recommended)
npm run start:root

# Start frontend development server
npm run frontend

# Install all dependencies (root + frontend)
npm run install:all
```

### Frontend Directory

```bash
cd frontend/vite_app

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚠️ Common Issues & Solutions

### Issue 1: "Cannot find module" errors

**Solution:**
```bash
# Make sure all dependencies are installed
npm run install:all
```

### Issue 2: MongoDB connection error

**Solutions:**
1. Check your MongoDB connection string
2. Ensure MongoDB Atlas IP whitelist includes your IP (or 0.0.0.0/0 for all)
3. Verify database name is "IELTS"
4. Check network connectivity

### Issue 3: Port already in use

**Solution:**
```bash
# Change port in backend/server.js
const PORT = process.env.PORT || 5001; // Use different port
```

### Issue 4: Frontend can't connect to backend

**Solutions:**
1. Ensure backend is running on port 5000
2. Check CORS settings in backend
3. Update frontend API endpoints to use `http://localhost:5000`
4. Check browser console for CORS errors

### Issue 5: Two backend servers conflict

**Solution:**
- **Use `backend/server.js`** (recommended) - Port 5000
- **Don't use `index.js`** (root) - Port 5001 (legacy/alternative)

## 🔐 Security Notes

⚠️ **Important**: The MongoDB connection string is currently hardcoded in the source code. For production:

1. Create a `.env` file in the `backend` folder
2. Add your connection string:
   ```env
   MONGODB_URI=your-connection-string-here
   ```
3. Update `backend/server.js` to use:
   ```javascript
   mongoose.connect(process.env.MONGODB_URI, {})
   ```
4. Add `.env` to `.gitignore`

## 🚀 Deployment

### Backend Deployment (Render/Railway/Heroku)

1. Set environment variables:
   - `MONGODB_URI`
   - `PORT` (usually auto-set by platform)
   - `JWT_SECRET`

2. Update `package.json` start script:
   ```json
   "scripts": {
     "start": "node backend/server.js"
   }
   ```

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
   ```bash
   cd frontend/vite_app
   npm run build
   ```

2. Deploy the `dist` folder

3. Update API endpoints to point to deployed backend

## 📝 Development Notes

### Which Backend to Use?

- **`backend/server.js`** (Port 5000) ✅ **RECOMMENDED**
  - Uses Mongoose
  - Has proper route structure
  - Includes authentication, feedback, IELTS routes
  
- **`index.js`** (Port 5001) ⚠️ **NOT RECOMMENDED**
  - Uses MongoDB native driver
  - Simpler structure
  - Only has basic IELTS routes

### Frontend API Configuration

Currently, the frontend uses mixed endpoints:
- Some point to deployed backend: `https://ielts-preparation-2.onrender.com`
- One points to local: `http://localhost:5000`

**To fix this**, create a centralized API config:
```javascript
// frontend/vite_app/src/config/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
export default API_BASE_URL;
```

Then update all fetch calls to use this config.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available for educational purposes.

## 🔗 Links

- **Live Demo**: [ielts-preparation-six.vercel.app](https://ielts-preparation-six.vercel.app)
- **GitHub Repository**: [DhruvilCG/ielts_preparation](https://github.com/DhruvilCG/ielts_preparation)

## 📧 Support

For issues and questions:
1. Check the [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) file
2. Open an issue on GitHub
3. Check existing issues for solutions

---

**Happy Learning! 📚✨**
