// IMPORTANDO PARÂMETROS PARA O MIDDLEWARE
import { Request, Response, NextFunction, response } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // RECEBER TOKEN
    const authtoken = request.headers.authorization;

    // VALIDAR SE O TOKEN ESTÁ PREENCHIDO
    if (!authtoken) {
        return response.status(401).end();
    }

    // DIVIDE AUTHTOKEN EM DOIS INDICES, CONST IGNORE O PRIMEIRO E ADICIONA SEGUNDO VALOR NA VARÁVEL TOKEN
    const [, token] = authtoken.split(" ")

    // INSPECIONAR SE TOKEN É VÁLIDO COM A FUNÇÃO VERIFY
    try {
        const { sub } = verify(token, "8cddea51480748ba39bb6e32c401194d") as IPayload;

        // RECUPERAR INFORMAÇÕES DO USUÁRIO
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }


}