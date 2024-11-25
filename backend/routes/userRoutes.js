import express from "express";
import {
  authUser,
  logoutUser,
  registerUser,
  getProfile,
  updateProfile,
  updateAccount,
  addIAM,
  deleteIAM,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser); //Register user
router.route("/auth").post(authUser); //Login user
router.get("/logout", protect, logoutUser); //
router.route("/profile").get(protect, getProfile).post(protect, updateProfile); //Get & Update user profile
router.route("/account").post(protect, updateAccount); //Update user account (email or password)
router.route("/iam").post(protect, addIAM).delete(protect, deleteIAM); //Add & delete IAM roles to user

export default router;
