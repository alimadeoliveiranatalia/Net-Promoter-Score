import { SurveysUsersRepository } from "../../repositories/SurveysUsersRepository";


export class AnswersUseCase {
    async execute(u: string, value: number){
        const surveysUsersRepository = new SurveysUsersRepository();
        
        const user = await surveysUsersRepository.findUserSurveyByID(u);

        if(!user) {
            throw new Error("Survey User does not Exists!");
        }

        const result = await surveysUsersRepository.updateValue(user.id, value);

        return result;
    }
}