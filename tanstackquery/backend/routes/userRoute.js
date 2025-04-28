import e from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = e.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

export default router;
