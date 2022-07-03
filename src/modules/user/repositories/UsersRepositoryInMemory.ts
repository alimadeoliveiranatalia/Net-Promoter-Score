import { User } from "@prisma/client";

interface ICreateUserDTO {
    name: string;
    email: string;
}

export class UsersRepositoryInMemory {
    private users: User[] = [];

    async create({ name, email }: ICreateUserDTO){
        const user = User;
        
        Object.assign(user,{
            name,
            email
        });

        this.users.push(user);
        
        return user;
    }
}