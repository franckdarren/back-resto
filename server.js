<<<<<<< HEAD

=======
import express from 'express';
import dotenv from "dotenv";



dotenv.config();

const port = process.env.Port || 3500;
const app = express();

app.use(express.json());




app.listen(port, () => {
  console.log(`le serveur écoute sur le port ${port}.`);
});

export default app;
>>>>>>> origin/steeve
