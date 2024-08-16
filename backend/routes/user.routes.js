import express from "express";
import { getUserForSidebar } from "../controllers/user.controllers.js";
import { protectRoute } from "../middleware/protectRoute.middleware.js";

const router = express.Router();

router.get("/",protectRoute, getUserForSidebar)

export default router;