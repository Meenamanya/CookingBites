# 🍽️ CookingBites – Restaurant Reservation System

CookingBites is a full-stack restaurant reservation web application built using the MERN stack. It provides a user-friendly interface for customers to explore the restaurant website and submit table reservation requests. Reservation details are stored in MongoDB Atlas through a Node.js and Express.js backend.

## ✨ Features

- 📅 **Table Reservations:** Submit reservation details through an online form.
- 🔗 **REST API Integration:** Connects the React frontend with the Express backend.
- 🗄️ **MongoDB Atlas Integration:** Stores reservation information in a cloud database.
- 📱 **User-Friendly Interface:** Provides a clean and accessible restaurant website.
- 🎨 **Custom Branding:** Features the CookingBites restaurant identity.
- ⚡ **Full-Stack Architecture:** Separates frontend and backend responsibilities.

## 🛠️ Tech Stack

- **Frontend:** React.js, JavaScript, Vite, HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **API:** REST API
- **Version Control:** Git and GitHub

## 📁 Project Structure

```text
CookingBites/
├── backend/
│   ├── config/
│   ├── controller/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── restApi.json
│   ├── index.html
│   └── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Meenamanya/CookingBites.git
cd CookingBites
```

**2. Install backend dependencies**

```bash
cd backend
npm install
```

**3. Configure environment variables**

Create a file named `config.env` inside `backend/config/` and add:

```env
MONGO_URI=your_mongodb_atlas_connection_uri
PORT=4000
FRONTEND_URL=http://localhost:5173
```

Replace the placeholder with your own MongoDB Atlas connection URI. Keep your database credentials private and never commit your `config.env` file to GitHub.

**4. Start the backend server**

From the `backend` directory, run:

```bash
npm start
```

The backend connects to MongoDB Atlas and starts the server on port `4000`.

**5. Install frontend dependencies**

Open a second terminal and navigate to the project root:

```bash
cd frontend
npm install
```

**6. Start the frontend**

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

http://localhost:5173

Keep both terminals running while using the application.

## 🔄 How It Works

1. **User Interaction:** Customers visit the CookingBites website and enter their details in the reservation form.
2. **Frontend Processing:** The React.js frontend collects the submitted information and sends a request to the backend API.
3. **Backend Processing:** The Express.js server receives the request and processes the reservation data.
4. **Database Storage:** The backend stores the reservation details in MongoDB Atlas.
5. **Response Handling:** The backend returns a response, and the frontend displays the result of the reservation submission.

## 🔌 API Overview

The backend exposes API routes for reservation-related operations. The exact endpoints and supported methods are defined in the backend route files.

- **Reservation submission:** Sends reservation details to the backend.
- **Reservation processing:** Validates and processes incoming reservation requests.
- **Database integration:** Stores reservation records in MongoDB Atlas.

Refer to the backend route and controller files for the implemented endpoints.

## 🔐 Security

- Store database credentials in environment variables.
- Keep `config.env` out of version control.
- Do not commit local database exports or files containing customer reservation data.
- Configure MongoDB Atlas access permissions appropriately.

## 🚧 Future Enhancements

- Reservation status tracking
- Email confirmations for successful reservations
- Admin dashboard for managing bookings
- Improved form validation and error handling
- Reservation management and reporting

## 📌 Repository

**GitHub:** [CookingBites – Restaurant Reservation System](https://github.com/Meenamanya/CookingBites)



