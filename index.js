import express from 'express';
import userRouter from './src/routes/user.routes.js';

const api = express();
api.use(express.json());

const port = 3000;

api.get('/', (req, res) =>{
    res.send("Conectado");
});

api.use('/api', userRouter);

api.listen(port, () =>{
    console.log(`Conectado a la url https://localhost:${port}`);
});