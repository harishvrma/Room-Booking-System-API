import { createRoom, getAllRooms, getRoomByID} from "../models/Room.js"

const addRoom = async (req, res)=>{
    try {
        const {room_number, type, price} = req.body;
        const result = await createRoom(room_number, type, price );

        res.status(201).json({
            message:"Room Created SuccessFully",
            roomId:result.insertId
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const getRooms = async (req, res)=>{
    try {
        const rooms = await getAllRooms();
        res.json(rooms)
    }
     catch (error) {
         res.status(500).json({ error: error.message });
    }
}
const getRoom = async (req, res) => {
    try {
        const {id} = req.params;
        const room = await getRoomByID(id);

        if(!room){
            return res.status(404).json({message:"Room Not Found"})
        }
        res.json(room)

        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}

export {getRoom, getRooms, addRoom}
