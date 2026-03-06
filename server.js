import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"
import roomRoutes from "./routes/roomRoutes.js"
import bookingRoutes from "./routes/bookingRoutes.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use("/api/users", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});