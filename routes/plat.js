// routes/plat.js
import express from 'express';
import {getAllPlats, getPlatById, createPlat, updatePlat, deletePlat } from '../controllers/platController.js';

const router = express.Router();

router.get('/plat', getAllPlats);
router.get('/plat:id', getPlatById);
router.post('/plat', createPlat);
router.put('/plat:id', updatePlat);
router.delete('/plat:id', deletePlat)

export default router;
