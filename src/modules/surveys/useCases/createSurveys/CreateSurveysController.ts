import { Request, Response } from "express";
import { CreateSurveysUseCase } from "./CreateSurveysUseCase";

export class CreateSurveysController {
    async handle(request: Request, response: Response){
        const { title, description } = request.body;

        const createSurveysUseCase = new CreateSurveysUseCase();

        const survey = await createSurveysUseCase.execute({
            title,
            description
        });

        return response.status(201).json(survey);
    }
}