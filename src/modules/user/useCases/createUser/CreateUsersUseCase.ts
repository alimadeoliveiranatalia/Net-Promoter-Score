import { UsersRepositories } from "../../repositories/UsersRepository";

interface ICreateUser {
    name: string;
    email: string;
}

export class CreateUsersUseCase {
    async execute({ name, email }: ICreateUser ){
        const userRepository = new UsersRepositories();

        const userAlreadyExists = await userRepository.findByEmail(email);

        if(userAlreadyExists){
            throw new Error("User Already Exists!");
        }
        
        const user = await userRepository.create(name, email);

        return user;
    }
}