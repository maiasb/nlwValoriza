import { EntityRepository, Repository } from "typeorm";
// IMPORTAÇÃO DE ENTIDADE DE USUÁRIOS
import { User } from "../entities/User";

// ENTITY PARA USER IMPORTADO
@EntityRepository(User)
// EXTENDENDO REPOSITÓRIO PARA USER, UTILIZAR MAIS FUNÇÕES
class UsersRepositories extends Repository<User> { }

export { UsersRepositories };