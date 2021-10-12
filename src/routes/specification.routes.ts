import { Router } from 'express';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { listspecificationController } from '../modules/cars/useCases/listSpecifications';



const specificationRoutes = Router() 

const createSpecificationController = new CreateSpecificationController();


specificationRoutes.use(ensureAuthenticated)
specificationRoutes.post("/", createSpecificationController.handle)

specificationRoutes.get("/", (request, response) => {
    return listspecificationController.handle(request, response)
})


export { specificationRoutes }