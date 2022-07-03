import { SurveysRepository } from "../../repositories/SurveysRepository";

interface ICreateSurveys {
    title: string;
    description: string;
}
export class CreateSurveysUseCase {
    async execute ({ title, description }: ICreateSurveys ){
        const surveysRepository = new SurveysRepository();

        const survey = await surveysRepository.create({
            title,
            description
        });

        return survey;
    }
}