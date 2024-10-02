import express from 'express';
import { getAllBoissons, getBoissonById, createBoisson, updateBoisson, deleteBoisson } from '../controllers/boissonController.js';

const router = express.Router();

router.get('/boisson', getAllBoissons);
router.get('/boisson:id', getBoissonById);
router.post('/boisson', createBoisson);
router.put('/boisson:id', updateBoisson);
router.delete('/boisson:id', deleteBoisson);


export default router;
