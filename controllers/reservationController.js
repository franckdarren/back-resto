import { Reservation } from '../models/reservationModel.js'; 


export const getAllReservations = (req, res) => {
  const reservations = [];  
  res.status(200).json(reservations);
};


export const createReservation = (req, res) => {
  const { nomClient, idPlat, dateTime, nombrePersonne, email } = req.body;
  const newReservation = new Reservation(Date.now(), nomClient, idPlat, dateTime, nombrePersonne, email);
  

  res.status(201).json(newReservation);
};


export const updateReservation = (req, res) => {
  const { idReservation } = req.params;
  const { nomClient, idPlat, dateTime, nombrePersonne, email } = req.body;

  const reservation = {}; 

  if (!reservation) {
    return res.status(404).json({ message: 'Réservation non trouvée' });
  }

  reservation.nomClient = nomClient || reservation.nomClient;
  reservation.idPlat = idPlat || reservation.idPlat;
  reservation.dateTime = dateTime || reservation.dateTime;
  reservation.nombrePersonne = nombrePersonne || reservation.nombrePersonne;
  reservation.email = email || reservation.email;

  res.status(200).json(reservation);
};


export const deleteReservation = (req, res) => {
  const { idReservation } = req.params;

  res.status(200).json({ message: 'Réservation supprimée' });
};
