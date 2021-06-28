import { Request, response, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, responde: Response) {
        const { email, password } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({ email, password });

        return response.json(token);
    }
}

export { AuthenticateUserController };