import { usersRepositories } from "../repositories/usersRepositories";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {
        const usersRepository = getCustomRepository(usersRepositories);

        // throw new devolve resposta a camada acima (Aqui o controller)
        if (!email) {
            throw new Error("E-mail incorrect.")
        }

        const userAlreadyExists = await usersRepository.findOne({ email });

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = usersRepository.create({ name, email, admin })

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };