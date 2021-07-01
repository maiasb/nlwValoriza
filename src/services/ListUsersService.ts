import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/usersRepositories";


class ListUserService {

    async execute() {
        const userRepositories = getCustomRepository(UsersRepositories);

        const users = await userRepositories.find();

        return users;

    }
}

export { ListUserService };