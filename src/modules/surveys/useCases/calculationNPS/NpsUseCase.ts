import { SurveysUsersRepository } from "../../repositories/SurveysUsersRepository";

export class NpsUseCase {
    async execute(survey_id: string){
        const surveysUsersRepository = new SurveysUsersRepository();

        const surveys = await surveysUsersRepository.findSurveysNotNull(survey_id);

        const detractors = surveys.filter(
            (survey) => survey.value as number >= 0 && survey.value as number <=6
        ).length;

        const promoters = surveys.filter(
            (survey) => survey.value as number >= 9 && survey.value as number <= 10
        ).length;

        const passive = surveys.filter(
            (survey) => survey.value as number >= 7 && survey.value as number <= 8
        ).length;

        const allAnswers = surveys.length;

        const nps = ((promoters - detractors)/allAnswers) * 100;

        return {
            detractors,
            promoters,
            passive,
            allAnswers,
            nps,
        }
    }
}