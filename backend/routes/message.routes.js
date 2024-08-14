import express from "express";

import { sendMessage } from "../controllers/message.controllers.js";
import { protectRoute } from "../middleware/protectRoute.middleware.js";

const router = express.Router();

router.post("/send/:id",protectRoute, sendMessage);

export default router;