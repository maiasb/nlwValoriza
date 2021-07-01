// IMPORTANDO PARÂMETROS PARA O MIDDLEWARE
import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/usersRepositories";

// CRIAÇÃO DE FUNÇÃO PARA VALIDAR ADMIN DE USUÁRIO
export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;

    const usersRepositories = getCustomRepository(UsersRepositories);

    const { admin } = await usersRepositories.findOne(user_id);

    // SE FOR ADMIN, PRÓXIMO PASSO
    if (admin) {
        return next();
    }

    // CASO NÃO, RETORNA ERRO
    return response.status(401).json({ error: "Unauthorized." })
}