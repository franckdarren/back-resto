import express from 'express';

const app = express();
const port = 3000;

// Définir une route
app.get('/', (req, res) => {
  res.send('salutations');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`je fonctionne bien`);
});
