// routes/reservation.js
import express from 'express';
import {getAllReservations, getReservationById, createReservation, updateReservation, deleteReservation } from '../controllers/reservationController.js';

const router = express.Router();

router.get('/reservation', getAllReservations);
router.get('/reservation:id', getReservationById);
router.post('/boisson', createReservation);
router.put('/reservation:id', updateReservation);
router.delete('/reservation:id', deleteReservation);

export default router;
