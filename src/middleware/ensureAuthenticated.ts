import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { appError } from "../errors/appError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";
import { userRouter } from "../routes/users.routes";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new appError("Token missing", 401);
    }

    const [, token] =authHeader.split(" ");
    try {
        const { sub: user_id }=verify(token, "5688304167da6f9d2de113bee6fa706d") as IPayload;
        //console.log("cheguei aqui",user_id)

        const userRepository = new UserRepository();
        const user = await userRepository.findbyId(user_id)

        if (!user) {
            throw new appError("User does not exists", 401)
        }

        request.user = {
            id : user_id
        }


        next();

    } catch {
        throw new appError("Invalid token", 401);
    }





}