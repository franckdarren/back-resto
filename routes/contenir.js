import express from 'express';
import { getAllAutorContenir, getAutorContenirById } from '../controllers/contenirController.js';

const router = express.Router();

router.get('/contenir', getAllAutorContenir);
router.get('/contenir:id', getAutorContenirById);

export default rcontenir