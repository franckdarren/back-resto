// routes/role.js
import express from 'express';
import {getAllRoles, getRoleById, createRole, updatRrole, deleteRole } from '../controllers/roleController.js';

const router = express.Router();

router.get('/role', getAllRoles);
router.get('/role:id', getRoleById);
router.post('/role', createRole);
router.put('/role:id', updatRrole);
router.delete('/role:id', deleteRole);

export default router;
