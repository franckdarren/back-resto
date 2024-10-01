import express from 'express';import {getAllAdmins, getAdminById, updatAdmin, deleteAdmin, loginAdmin, logoutAdmin } from '../controllers/AdminController.js';


const router = express.Router();

router.get('/admin', getAllAdmins);
router.get('/admin:id', getAdminById);
router.put('/admin:id', updatAdmin);
router.delete('/admin:id', deleteAdmin);
router.post('/login', loginAdmin);
router.post('/logout', logoutAdmin);

export default router;
