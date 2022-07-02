import { Router } from "express";
import { CreateUsersController } from "./modules/user/useCases/createUser/CreateUsersController";

const router = Router();

const createUsersController = new CreateUsersController();

router.post("/users", createUsersController.handle);

export { router }