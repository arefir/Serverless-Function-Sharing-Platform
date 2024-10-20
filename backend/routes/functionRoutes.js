import express from "express";
import {
  uploadFunction,
  getFunctions,
  getFunction,
} from "./functionController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, uploadFunction).get(protect, getFunctions); //upload function, get all functions
router.route("/:id").get(protect, getFunction); //get single function

export default router;
