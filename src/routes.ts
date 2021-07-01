import { Router } from "express";
// IMPORTAÇÃO DE CONTROLLER DE CRIAÇÃO DE USUÁRIO
import { CreateUserController } from "./controllers/createUserController";
// IMPORTAÇÃO DE CONTROLLER DE CRIAÇÃO DE TAG
import { CreateTagController } from "./controllers/createTagsController";
// IMPORTAÇÃO DE CONTROLLER DE AUTENTICAÇÃO DE USUÁRIO
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
// IMPORTAÇÃO DE CONTROLLER PARA A CRIAÇÃO DE ELOGIO
import { CreateComplimentController } from "./controllers/CreateComplimentController";
// IMPORTAÇÃO DE CONTROLLER PARA A LISTAGEM DE ELOGIOS ENVIADOS PELO USUÁRIO
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
// IMPORTAÇÃO DE CONTROLLER PARA A LISTAGEM DE ELOGIOS RECEBIDOS, DO USUÁRIO
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
// IMPORTAÇÃO DE MIDDLEWARE PARA VALIDAR ADMIN DO USUÁRIO
import { ensureAdmin } from "./middlewares/ensureAdmin";
// IMPORTAÇÃO DE MIDDLEWARE PARA RECEBER VALIDAR TOKEN
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListTagsController } from "./controllers/ListTagsController";


const router = Router();

const createUserController = new CreateUserController();

const createTagController = new CreateTagController();

const authenticateUserController = new AuthenticateUserController();

const createComplimentController = new CreateComplimentController();

const listUserSendComplimentsController = new ListUserSendComplimentsController();

const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

const listTagsController = new ListTagsController();

// ROTA PARA A CRIAÇÃO DE USUÁRIO
router.post("/users", createUserController.handle);
// ROTA PARA LISTAR TODAS AS TAGS
router.get("/tags", ensureAuthenticated, listTagsController.handle)
// ROTA PARA A CRIAÇÃO DE TAG
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
// ROTA PARA A AUTENTICAÇÃO DE USUÁRIO
router.post("/login", authenticateUserController.handle);
// ROTA PARA A CRIAÇÃO DE ELOGIO
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
// ROTA PARA LISTAR TODOS OS ELOGIOS ENVIADOS PELO USUÁRIO
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle)
// ROTA PARA LISTAR TODOS OS ELOGIOS RECEBIDOS DO USUÁRIO
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle)

export { router };