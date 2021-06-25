import express, { json, Request, Response, NextFunction } from 'express';
import "express-async-errors";
import "reflect-metadata";
import "./database";
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({ error: err.message });
    }
    return response.status(500).json({
        status: "Error",
        message: "Internal server error"
    });
});

app.listen(3000, () => console.log("Server is running on port 3000!"));