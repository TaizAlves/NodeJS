import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";


interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findbyEmail(email: string): Promise<User>;
    findbyId(id: string): Promise<User>;

}

export { IUsersRepository }