import express from "express";
import { Signin, Signup, Google } from "../controllers/Auth.controllers.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/google", Google);

export default router;
