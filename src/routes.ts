import { Router } from "express";
import { AnswersController } from "./modules/surveys/useCases/answersUsers/AnswersController";
import { NpsController } from "./modules/surveys/useCases/calculationNPS/NpsController";
import { CreateSurveysController } from "./modules/surveys/useCases/createSurveys/CreateSurveysController";
import { ListAllSurveysController } from "./modules/surveys/useCases/listAllSurveys/ListAllSurveysController";
import { SendEmailController } from "./modules/surveys/useCases/sendEmail/SendEmailController";
import { CreateUsersController } from "./modules/user/useCases/createUser/CreateUsersController";

const router = Router();

const createUsersController = new CreateUsersController();

const createSurveysController = new CreateSurveysController();

const listAllSurveysController = new ListAllSurveysController();

const sendEmailController = new SendEmailController();

const answersController = new AnswersController();

const npsController = new NpsController();

router.post("/users", createUsersController.handle);

router.post("/surveys", createSurveysController.handle);

router.get("/surveys", listAllSurveysController.handle);

router.post("/send-email", sendEmailController.handle);

router.get("/answers/:value", answersController.handle);

router.get("/nps/:survey_id", npsController.handle);

export { router }