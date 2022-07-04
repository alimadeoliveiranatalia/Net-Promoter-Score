import { SendEmailService } from "../../../../services/SendEmailService";
import { UsersRepositories } from "../../../user/repositories/UsersRepository";
import { SurveysRepository } from "../../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../../repositories/SurveysUsersRepository";

interface ICreateEmail {
    email: string,
    survey_id: string
}
export class SendEmailUseCase {
    async execute({ email, survey_id }: ICreateEmail){
        const userRepository = new UsersRepositories();

        const user = await userRepository.findByEmail(email);

        if(!user) {
            throw new Error("User does not exists!");
        }

        const surveyRepository = new SurveysRepository();

        const survey = await surveyRepository.findBySurveyId(survey_id);

        if(!survey) {
            throw new Error("Survey does not exists!");
        }

        const surveysUsersRepository = new SurveysUsersRepository();

        await surveysUsersRepository.create({
            user_id: user.id,
            survey_id: survey.id
        });

        const sendEmailService = new SendEmailService();
        
        const surveyUser = await sendEmailService.execute(email, survey.title, survey.description);

        return surveyUser;




    }
}