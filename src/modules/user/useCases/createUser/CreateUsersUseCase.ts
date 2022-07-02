import { prisma } from "../../../../database/prismaClient";

interface ICreateUser {
    name: string;
    email: string;
}

export class CreateUsersUseCase {
    async execute({ name, email }: ICreateUser ){
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email: {
                    equals: "email",
                    mode: "insensitive"
                }
            }
        });

        if(userAlreadyExists){
            throw new Error("User Already Exists!");
        }
        
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return user;
    }
}