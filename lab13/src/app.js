import express from 'express';
import medicRoutes from './routes/medic.routes.js'

const app = express();

//middlewares
app.use(express.json());     //Con ésto ya puede entender los objetos json

app.use(medicRoutes);

export default app;     //A ésto lo voy a exportar. Es la aplicación del Servidor.
