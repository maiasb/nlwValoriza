import { Request, Response } from "express";
import { RepositoryNotFoundError } from "typeorm";
// IMPORTANDO SERVICE PARA A CONEXÃO DO USUÁRIO COM O REPOSITÓRIO
import { CreateUserService } from "../services/createUserService";

// CRIAÇÃO DE CLASSE CONTROLLER PARA CRIAR USUÁRIO
class CreateUserController {
    async handle(request: Request, response: Response) {
        // DESESTRUTURAÇÃO DE DADOS DO USUÁRIO
        const { name, email, admin, password } = request.body;

        // ADICIONANDO SERVICE EM CONSTANTE PARA A EXECÇÃO A SEGUIR
        const createUserService = new CreateUserService();

        // CONSTANTE USER RECEBE CONSTANTE DO SERVICE QUE É EXECUTADO EM SEGUIDA
        const user = await createUserService.execute({ name, email, admin, password })

        // RECEBE USUÁRIO, CASO NÃO RETORNE OUTRAS MENSAGENS PELO THROW NEW
        return response.json(user);
    };
}

export { CreateUserController };