import express from "express";
import { getNotes,getNoteById,CreateNote,UpdateNote,DeleteNote } from "../controller/ControllerNote.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/notes', verifyToken, getNotes);
router.get('/notes/:id', verifyToken, getNoteById);
router.post('/notes', verifyToken, CreateNote);
router.patch('/notes/:id', verifyToken, UpdateNote);
router.delete('/notes/:id', verifyToken, DeleteNote);

export default router; 