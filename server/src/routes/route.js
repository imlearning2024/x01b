import { Router } from "express";
import { upload } from "../config/multer.config.js";
import test from "../controllers/test.controller.js";
import main from "../controllers/main.controller.js";
export const router = Router();

router.get("/test", test);
router.post("/main", upload.single("file"), main);
