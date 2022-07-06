import { Request, Response } from "express";
import { NpsUseCase } from "./NpsUseCase";

export class NpsController {
    async handle(request: Request, response: Response) {
        const { survey_id } = request.params;

        const npsUseCase = new NpsUseCase();

        const result = await npsUseCase.execute(survey_id);

        return response.json(result);
    }
}