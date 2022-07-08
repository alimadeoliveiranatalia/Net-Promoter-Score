import { User } from "@prisma/client";
import { prisma } from "../../../database/prismaClient";
import { IUsersRepository } from "./IUsersRepository";

interface ICreateUserDTO {
    name: string;
    email: string;
}

export class UsersRepositories implements IUsersRepository {

    async create({name, email}:ICreateUserDTO) : Promise<User>{
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });
        return user;
    }

    async findByEmail(email: string): Promise<User>{
        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive"
                }
            }
        });

        return user as User;
    }
}