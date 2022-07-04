import { Request, Response } from "express";

export class SendEmailController {
    async handle(request: Request, response: Response){
        const { email, survey_id } = request.body;
    }
}