import pool from '../config/db.js'

const createRoom = async(room_number, type, price)=>{
    const [result] = await pool.query(
        "INSERT INTO rooms (room_number, type, price) VALUES (?, ?,?)",
        [room_number, type, price]

    )
    return result;
}
const getAllRooms = async () => {
    const [rows] = await pool.query(
        "SELECT * FROM rooms",
        
    )
    return rows;
}

const getRoomByID = async (id) => {
    const [rows] = await pool.query(
        "SELECT * FROM rooms WHERE id = ?", 
        [id]
    )
    return rows[0];
    
}
export {createRoom,getAllRooms, getRoomByID}