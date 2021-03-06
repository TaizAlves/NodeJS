import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { appError } from "../../../../errors/appError";


interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository ) {}

    async execute({name, description}: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findbyName(name );
        if (specificationAlreadyExists) {
            throw new appError("Specification already exists")
        }

        await this.specificationsRepository.create({ name, description, });
        
    }

}


export { CreateSpecificationUseCase }