import { prisma } from "../../../database/prismaClient";

interface ICreateSurvey {
    title: string;
    description: string;
}

export class SurveysRepository {
    async create ({ title, description }:ICreateSurvey){
        const survey = await prisma.surveys.create({
            data: {
                title,
                description
            }
        });

        return survey;
    }
    async list(){
        const survey = await prisma.surveys.findMany();
        return survey;

    }
    async findBySurveyId(id: string) {
        const survey = await prisma.surveys.findFirst({
            where: {
                id: {
                    equals: id,
                    mode: "insensitive"
                }
            }
        });
        return survey;
    }
}