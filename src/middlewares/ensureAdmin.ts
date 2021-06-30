// IMPORTANDO PARÂMETROS PARA O MIDDLEWARE
import { Request, Response, NextFunction } from "express";

// CRIAÇÃO DE FUNÇÃO PARA VALIDAR ADMIN DE USUÁRIO
export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // USUÁRIO RECEBE ADMIN TRUE SEMPRE (PRECISA CONTINUAR)
    const admin = true;

    // SE FOR ADMIN, PRÓXIMO PASSO
    if (admin) {
        return next();
    }

    // CASO NÃO, RETORNA ERRO
    return response.status(401).json({ error: "Unauthorized." })
}