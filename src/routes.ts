import { Router } from "express";
// IMPORTAÇÃO DE CONTROLLER DE CRIAÇÃO DE USUÁRIO
import { CreateUserController } from "./controllers/createUserController";
// IMPORTAÇÃO DE CONTROLLER DE CRIAÇÃO DE TAG
import { CreateTagController } from "./controllers/createTagsController";
// IMPORTAÇÃO DE CONTROLLER DE AUTENTICAÇÃO DE USUÁRIO
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
// IMPORTAÇÃO DE CONTROLLER PARA A CRIAÇÃO DE ELOGIO
import { CreateComplimentController } from "./controllers/CreateComplimentController";
// IMPORTAÇÃO DE MIDDLEWARE PARA VALIDAR ADMIN DO USUÁRIO
import { ensureAdmin } from "./middlewares/ensureAdmin";


const router = Router();

// ROTA PARA A CRIAÇÃO DE USUÁRIO
const createUserController = new CreateUserController();

// ROTA PARA A CRIAÇÃO DE TAG
const createTagController = new CreateTagController();

// ROTA PARA A AUTENTICAÇÃO DE USUÁRIO
const authenticateUserController = new AuthenticateUserController();

// ROTA PARA A CRIAÇÃO DE ELOGIO
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);

export { router };