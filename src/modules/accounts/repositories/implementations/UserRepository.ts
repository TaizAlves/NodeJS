import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";


import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";



class UserRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create({name,  password, email, driver_license, avatar, id}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            password,
            email,
            driver_license,
            avatar,
            id,
        });

        await this.repository.save(user)
    }

    async findbyEmail(email:string): Promise<User> {
        const user = await this.repository.findOne({email})
        return user;
    }

    async findbyId(id:string): Promise<User>{
        const user = await this.repository.findOne(id);
        return user;

    }

}


export { UserRepository }