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
    async findByUserSurveyNull(user_id: string){
        const surveyNoResponse = await prisma.surveys_Users.findFirst({
            where: {
                userId: user_id,
                value: null
            }
        });

        return surveyNoResponse;
    }
    async findUserSurveyByID(id: string){
        const surveyNoResponse = await prisma.surveys_Users.findFirst({
            where: {
                id: id
            }
        });

        return surveyNoResponse;
    }
    async updateValue(surveyUserId: string,value: number){
        const valueSurvey = await prisma.surveys_Users.update({
            where: {
                id: surveyUserId
            },
            data: {
                value
            }
        }); 
        return valueSurvey;
    }
    async findSurveysNotNull(survey_id: string){
        const surveys = await prisma.surveys_Users.findMany({
            where: {
                surveyId: survey_id,
                NOT : {
                    value: null
                }
            }
        });
        return surveys;
    }
}