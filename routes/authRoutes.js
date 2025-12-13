import express from "express";
import {registerUser,loginUser,forgotPassword, resetpassword, changepassword, googleAuth} from "../controllers/authController.js";

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/forgot-password",forgotPassword);
router.post("/reset-password",resetpassword);
router.post("/change-password",changepassword);
router.post("/google", googleAuth);

export default router;