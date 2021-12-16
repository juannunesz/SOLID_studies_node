import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class PostgresUsersRepository implements IUserRepository {

    private users: User[] = [];

    findByEmail(email: string) {
        const user = this.users.find(user => user.email === email)
    }

    save(user: User) {
       this.users.push(user);
    }
}