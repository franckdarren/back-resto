
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { dbConnect } from './config/db.js';




// Charger les variables d'environnement
dotenv.config();

import express from 'express';
const app = express();

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Bonjour à vous');
});


app.use(express.json());


app.use()
 app.use()
 app.use()
 app.use()
 app.use()
 app.use()
