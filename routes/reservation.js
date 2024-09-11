import express from 'express';

const routeReservation = express.Router()

routeReservation.post('/reservation')
routeReservation.get('/reservation')


export default routeReservation
