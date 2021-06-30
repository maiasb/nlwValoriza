import express, { json, Request, Response, NextFunction } from 'express';
import "express-async-errors";
import "reflect-metadata";
import "./database";
import { router } from './routes';

const app = express();

// POSSIBILITA RETORNOS JSON
app.use(express.json());

// ADICIONANDO ROTAS AO APP
app.use(router);

// MENSAGENS DE ERRO, CASO ROTA NÃO SE COMPLETE
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({ error: err.message });
    }
    return response.status(500).json({
        status: "Error",
        message: "Internal server error"
    });
});

// DEFININDO PORTA AO SERVER
app.listen(3000, () => console.log("Server is running on port 3000!"));