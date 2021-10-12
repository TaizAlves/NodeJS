import { inject, injectable } from "tsyringe";
import { hash} from "bcrypt";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { appError } from "../../../../errors/appError";



@injectable()
class CreateUserUsecase {

    constructor(
        @inject("UserRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({name, email, password, driver_license}: ICreateUserDTO): Promise<void> {

        const userAlredyExists = await this.userRepository.findbyEmail(email);

        if (userAlredyExists) {
            throw new appError("User already exists")
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license
        });
    }
}

export { CreateUserUsecase }