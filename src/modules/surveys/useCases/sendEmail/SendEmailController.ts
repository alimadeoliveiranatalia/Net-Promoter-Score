import { Request, Response } from "express";
import { SendEmailUseCase } from "./SendEmailUseCase";

export class SendEmailController {
    async handle(request: Request, response: Response){
        const { email, survey_id } = request.body;

        const sendEmailUseCase = new SendEmailUseCase();

        const surveyUser = await sendEmailUseCase.execute({
            email,
            survey_id
        });

        return response.status(201).json(surveyUser);
    }
}