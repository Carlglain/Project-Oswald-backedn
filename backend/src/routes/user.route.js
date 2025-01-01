import express from "express"
import { addUser, deleteUser, disPlayAllUsers, displayUser, updateUser } from "../controllers/user.controller.js";

const router = express.Router()

router.post("/createUser",addUser);
router.get("/displayUser/:userId",displayUser);
router.get("/displayAllUsers",disPlayAllUsers);
router.delete("/deleteUser/:userId",deleteUser);
router.put("/updateUser/:userId",updateUser);
export default router