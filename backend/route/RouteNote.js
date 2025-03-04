import express from "express";
import { getNotes,getNoteById,CreateNote,UpdateNote,DeleteNote } from "../controller/ControllerNote.js";

const router = express.Router();

router.get('/notes', getNotes);
router.get('/notes/:id', getNoteById);
router.post('/notes', CreateNote);
router.patch('/notes/:id', UpdateNote);
router.delete('/notes/:id', DeleteNote);

export default router; 