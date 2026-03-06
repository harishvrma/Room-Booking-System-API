import pool from '../config/db.js'

const createBooking = async (user_id, room_id, check_in, check_out) => {
    const  [result] = await pool.query(
        "INSERT INTO bookings (user_id, room_id, check_in, check_out) VALUES (?,?,?,?)",
        [user_id, room_id, check_in, check_out]

    )   
    return result; 
}
 const getBookingsByUser = async (user_id) => {
    const [rows] = await pool.query(
        "SELECT * FROM bookings WHERE user_id = ?",
        [user_id]
    );
    console.log("Query user_id:", user_id);
    return rows;
};

 const checkRoomAvailability = async (room_id, check_in, check_out) => {
    const [rows] = await pool.query(
        `SELECT * FROM bookings
         WHERE room_id = ?
         AND (check_in <= ? AND check_out >= ?)`,
        [room_id, check_out, check_in]
    );
    return rows;
};

export {createBooking, getBookingsByUser, checkRoomAvailability}