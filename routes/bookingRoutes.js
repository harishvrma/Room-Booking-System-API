import express from "express"
import verifyToken from "../middleware/authMiddleware.js";
import {bookRoom, getUserBooking} from "../controllers/bookingController.js"
import validate from "../middleware/validate.js";
import { bookingValidator } from "../validators/bookingvalidators.js";

const router = express.Router()
//Book room
router.post("/",bookingValidator, validate, verifyToken, bookRoom  );
//Get Booking
router.get("/my-bookings", verifyToken,getUserBooking);
export default router
