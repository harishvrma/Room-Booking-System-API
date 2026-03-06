import express from "express"
import {addRoom, getRoom, getRooms} from "../controllers/roomController.js"
import { roomValidator } from "../validators/roomvalidators.js"
import validate from "../middleware/validate.js"

const router= express.Router()

//create room
router.post("/", roomValidator, validate, addRoom)

//Get all rooms

router.get("/", getRooms)

//Get Single Room

router.get("/:id", getRoom)

export default router