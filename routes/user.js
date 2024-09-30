// routes/user.js
import express from 'express';import {getAllUsers, getUserById, updatUser, deleteUser, loginUser, logoutUser } from '../controllers/userController.js';


const router = express.Router();

router.get('/user', getAllUsers);
router.get('/user:id', getUserById);
router.put('/user:id', updatUser);
router.delete('/user:id', deleteUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;
