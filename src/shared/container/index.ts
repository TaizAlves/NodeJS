import {  container} from 'tsyringe';
import { UserRepository } from '../../modules/accounts/repositories/implementations/UserRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoryRepository } from '../../modules/cars/repositories/implementation/CategoriesRepositories';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementation/SpecificationsRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository';


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", CategoryRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UserRepository", UserRepository
)