import { User } from "../entities/User";

export interface IUserRepository {
    findByEmail(email: string): any;

    save(user: User): any;
}