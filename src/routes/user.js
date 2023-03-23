import express from "express";
import { create, getAll, getDetail, remove, update } from "../controllers/user.js";

const router = express.Router();
router.get("/users", getAll);
router.get("/user/:id", getDetail);
router.post("/user", create);
router.put("/user/:id", update);
router.delete("/user2/:id", remove);
export default router;