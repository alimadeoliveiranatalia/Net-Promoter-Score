import { prisma } from "../../../database/prismaClient";

interface ICreateSurveyUser {
    user_id: string;
    survey_id: string;
}

export class SurveysUsersRepository {
    async create({ user_id, survey_id }: ICreateSurveyUser){
        const survey_user = await prisma.surveys_Users.create({
            data: {
                userId: user_id,
                surveyId: survey_id
            }
        });

        return survey_user;
    }
}