import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { appError } from "../../../../errors/appError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
 

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string
    },
    token: string;
}

@injectable()
class AuthenticateUserUsecase {

    constructor(
        @inject("UserRepository")
        private usersRepository: IUsersRepository ) {}

    async execute({email, password}: IRequest): Promise <IResponse> {
        //Usuario existe
        const user = await this.usersRepository.findbyEmail(email);

        if (!user) {
            throw new appError("Email or password incorrect")
        }

        // A senha está correta

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new appError("Email or password incorrect")
        }

        // gerar jsonwebtoken
        const token = sign({},"5688304167da6f9d2de113bee6fa706d", {
            subject: user.id,
            expiresIn: "1d"
        } );

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }

        }

        return tokenReturn;

    }

}


export { AuthenticateUserUsecase }