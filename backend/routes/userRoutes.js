import express from "express";
import {
  authUser,
  registerUser,
  getProfile,
  updateProfile,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser); //Register user
router.route("/auth").post(authUser); //Login user
router.route("/profile").get(protect, getProfile).post(protect, updateProfile); //Update user profile

export default router;
