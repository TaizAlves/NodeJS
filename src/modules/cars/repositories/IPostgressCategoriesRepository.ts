import { Category } from "../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgressCategoriesRepository implements ICategoriesRepository {
    findbyName(name: string): Category {
        console.log(name)
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description)
    }


}


export { PostgressCategoriesRepository }