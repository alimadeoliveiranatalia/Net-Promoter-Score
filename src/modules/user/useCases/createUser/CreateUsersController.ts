import { Request, Response } from "express";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

export class CreateUsersController {
    async handle(request: Request, response: Response) {
        const { name, email } = request.body;

        const createUsersUseCase = new CreateUsersUseCase();

        const user = await createUsersUseCase.execute({
            name,
            email
        });

        return response.status(201).json(user);

    }
}