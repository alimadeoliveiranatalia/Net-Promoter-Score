import { SurveysRepository } from "../../repositories/SurveysRepository";

export class ListAllSurveysUseCase {
    async execute(){
        const surveysRepository = new SurveysRepository();

        const surveys = await surveysRepository.list();

        return surveys;
    }
}