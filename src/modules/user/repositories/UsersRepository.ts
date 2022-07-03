import { prisma } from "../../../database/prismaClient";

export class UsersRepositories {

    async create(name: string, email: string){
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });
        return user;
    }

    async findByEmail(email: string){
        const user = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive"
                }
            }
        });

        return user;
    }
}