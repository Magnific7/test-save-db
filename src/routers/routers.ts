import express from "express";
// import User from "save-database";
import userController from "../controllers/controller";

const router = express.Router();

router.get("/users", userController.getAllUsers);

export default router;
