import express from "express";
import { allNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", allNotes);

export default router;
