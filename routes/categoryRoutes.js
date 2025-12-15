import express from "express";
import {
  createcategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createcategory).get(protect, getCategory);
router.put("/:id", protect, updateCategory);

router.delete("/:id", protect, deleteCategory);
export default router;
