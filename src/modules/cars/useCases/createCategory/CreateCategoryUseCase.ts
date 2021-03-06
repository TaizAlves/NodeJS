import { inject, injectable } from 'tsyringe';
import { appError } from '../../../../errors/appError';
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository ) {}
    

    async execute({ name, description }: IRequest): Promise<void>  {
        const categoryAlreadyExists = await this.categoriesRepository.findbyName( name );

        if (categoryAlreadyExists){
            throw new appError(" Category already exists")
        }

        this.categoriesRepository.create({name, description});
        }

}


export { CreateCategoryUseCase };