import e from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
} from "../controllers/userController.js";

const router = e.Router();

router.get("/", getAllUsers);

router.post("/", createUser);

router.delete("/:id", deleteUser);

export default router;
