// routes/userRole.js
import express from 'express';
import { getAllUserRoles, updatUserRole, deleteUserRolen} from '../controllers/RoleController.js';

const router = express.Router();

router.get('/userRole', getAllUserRoles);
router.put('/userRole:id', updatUserRole);
router.delete('/userRole:id', deleteUserRole);

export default router;
