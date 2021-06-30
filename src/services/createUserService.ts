// IMPORTAÇÃO DE REPOSITÓRIO DE USUÁRIOS, QUE IRÁ CONTER ENTIDADE DE USUÁRIO
import { UsersRepositories } from "../repositories/usersRepositories";
import { getCustomRepository } from "typeorm";
// LIB PARA A CRIPTOGRAFIA DA SENHA DO USUÁRIO
import { hash } from "bcryptjs"

// INTERFACE PARA OS DADOS DO USUÁRIO
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string
}

// CRIAÇÃO DE CLASSE SERVICE PARA A CRIAR USUÁRIO
class CreateUserService {
    // RECEBE PARÂMETROS DA INTERFACE
    async execute({ name, email, admin = false, password }: IUserRequest) {
        // FAZ A UTILIZAÇÃO DO REPOSITÓRIO DE USUÁRIOS
        const usersRepository = getCustomRepository(UsersRepositories);

        // throw new devolve resposta a camada acima (Aqui o controller)
        // SE EMAIL NÃO VIR PREENCHIDO, NESSE CASO
        if (!email) {
            throw new Error("E-mail incorrect.")
        }

        // FAZ A BUSCA DE USUÁRIO NO BANCO, COM O REPOSITÓRIO
        const userAlreadyExists = await usersRepository.findOne({ email });

        // SE USUÁRIO JÁ EXISTIR, RETORNA A CAMADA ACIMA
        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        // SENHA DE USUÁRIO RECEBE CRIPTOGRAFIA COM O HASH, 8 DÍGITOS
        const passwordHash = await hash(password, 8)

        // UTILIZA REPOSITÓRIO DE USUÁRIO PARA A CRIAÇÃO DE USUÁRIO
        const user = usersRepository.create({ name, email, admin, password: passwordHash })

        // UTILIZA REPOSITÓRIO DE USUÁRIO PARA SALVAR NOVO USUÁRIO
        await usersRepository.save(user);

        // RETORNA USUÁRIO
        return user;
    }
}

export { CreateUserService };