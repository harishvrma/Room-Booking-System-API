import { createBooking, getBookingsByUser, checkRoomAvailability } from "../models/Booking.js";
import pool from "../config/db.js";

const bookRoom = async (req, res) => {
  const connection = await pool.getConnection();

  try {
    const user_id = req.user.id;
    const { room_id, check_in, check_out } = req.body;

    // Start transaction
    await connection.beginTransaction();

    // Lock room row
    await connection.query(
      "SELECT * FROM rooms WHERE id = ? FOR UPDATE",
      [room_id]
    );

    // Check availability
    const existingBooking = await checkRoomAvailability(
      room_id,
      check_in,
      check_out
    );

    if (existingBooking.length > 0) {
      await connection.rollback();
      return res.status(400).json({
        message: "Room not available for selected dates"
      });
    }

    // Create booking
    const result = await createBooking(
      user_id,
      room_id,
      check_in,
      check_out
    );

    // Commit transaction
    await connection.commit();

    res.status(201).json({
      message: "Room booked successfully",
      bookingId: result.insertId
    });

  } catch (error) {
    await connection.rollback();
    res.status(500).json({ error: error.message });

  } finally {
    connection.release();
  }
};

const getUserBooking = async (req, res) => {
  try {
    const user_id = req.user.id;

    console.log("User ID:", user_id);

    const bookings = await getBookingsByUser(user_id);

    console.log("Bookings:", bookings);

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { bookRoom, getUserBooking };