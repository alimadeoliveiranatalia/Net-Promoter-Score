import { Request, Response } from "express";
import { ListAllSurveysUseCase } from "./ListAllSurveysUseCase";

export class ListAllSurveysController {
    async handle (request: Request, response: Response) {
        const listAllSurveysUseCase = new ListAllSurveysUseCase();

        const surveys = await listAllSurveysUseCase.execute();

        return response.json(surveys);
    }
}