import { Router } from "express";
import { CreateSurveysController } from "./modules/surveys/useCases/createSurveys/CreateSurveysController";
import { CreateUsersController } from "./modules/user/useCases/createUser/CreateUsersController";

const router = Router();

const createUsersController = new CreateUsersController();

const createSurveysController = new CreateSurveysController();

router.post("/users", createUsersController.handle);

router.post("/surveys", createSurveysController.handle);

export { router }