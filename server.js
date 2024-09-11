import express from 'express';

const app = express();
const port = 3000;


import routeMenu from './routes/menu.js';

import routeReservation from './routes/reservation.js';


// Définir une route
app.use('/api', routeMenu)
app.use('/api', routeReservation)


// Démarrer le serveur
app.listen(port, () => {
  console.log(`je fonctionne bien`);
});
