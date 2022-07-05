import { Request, Response } from "express";
import { AnswersUseCase } from "./AnswersUseCase";

export class AnswersController {
    async handle(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const answersUseCase = new AnswersUseCase();

        const result = await answersUseCase.execute(String(u), Number(value));

        return response.json(result);
    }
}