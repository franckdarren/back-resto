import express from 'express';
import { getAllAutorisations, getAutorisationById } from '../controllers/autorisationController.js';

const router = express.Router();

router.get('/boisson', getAllAutorisations);
router.get('/boisson:id', getAutorisationById);

export default router;
