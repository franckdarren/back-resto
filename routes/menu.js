import express from 'express';
import { getAllMenus, getMenuById, createMenu, updateMenu, deleteMenu} from '../controllers/menuController.js';

const router = express.Router();

router.get('/menu', getAllMenus);
router.get('/menu:id', getMenuById);
router.post('/menu', createMenu);
router.put('/menu:id', updateMenu);
router.delete('/menu:id', deleteMenu);

export default router;
