import express from "express";
import {
  uploadFunction,
  getFunctions,
  getFunction,
  updateFunction,
  deleteFunction,
  deployFunction,
  testFunction,
} from "../controllers/functionController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, uploadFunction).get(protect, getFunctions); //upload function, get all functions
router
  .route("/:id")
  .get(protect, getFunction)
  .post(protect, updateFunction)
  .delete(protect, deleteFunction); //get single function, update function, delete function
router.post("/deploy/:id", protect, deployFunction);
router.post("/test/:id", protect, testFunction);

export default router;
