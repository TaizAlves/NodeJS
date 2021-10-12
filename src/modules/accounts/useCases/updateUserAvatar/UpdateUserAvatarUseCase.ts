import { inject, injectable } from "tsyringe";
import { deletefile } from "../../../../utils/file";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
    avatar_file: string;
}
@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUsersRepository

    ) {}

    async execute({user_id, avatar_file}:IRequest): Promise<void> {
        const user = await this.userRepository.findbyId(user_id);

        if ( user.avatar) {
            // deletar o avatar antigo
            await deletefile(`./tmp/avatar/${user.avatar}`)
        }

        user.avatar = avatar_file;

        await this.userRepository.create(user)


    }

}


export { UpdateUserAvatarUseCase };