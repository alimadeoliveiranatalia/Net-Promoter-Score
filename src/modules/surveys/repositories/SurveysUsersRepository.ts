interface ICreateSurveyUser {
    user_id: string;
    survey_id: string;
}

export class SurveysUsersRepository {
    async create({ user_id, survey_id }: ICreateSurveyUser){

    }
}