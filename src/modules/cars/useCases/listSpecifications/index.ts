import { SpecificationsRepository } from "../../repositories/implementation/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";



const specificationsRepository = null;
const listspecificationUseCase = new ListSpecificationsUseCase(specificationsRepository);
const listspecificationController = new ListSpecificationsController(listspecificationUseCase);


export { listspecificationController }


