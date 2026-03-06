# Room Booking API

A RESTful API built using **Node.js, Express, and MySQL** that allows users to register, login, view rooms, and book rooms securely.  
The system also prevents **overlapping bookings** using database transactions.

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- JWT Authentication
- Express Validator
- dotenv

---

# Project Setup

## 1 Clone the Repository

```bash
git clone https://github.com/yourusername/room-booking-api.git
cd room-booking-api
```

# Create a .env file in the root folder.

Example:

PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=roombooking

JWT_SECRET=supersecretkey

# Start the Server
npm start

or using nodemon

npx nodemon server.js

Server will start on

http://localhost:5000
