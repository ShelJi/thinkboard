import express from "express";
import { allNotes, createNote,updateNote,deleteNote,singleNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", allNotes);
router.get("/:id", singleNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
