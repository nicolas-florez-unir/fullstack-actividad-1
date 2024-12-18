import { GetAllBooksUseCase } from "@books/application/use-cases/getAllBook.use-case";
import { FindByNameUseCase } from '@books/application/use-cases/findByName.use-case';
import { FindByIdUseCase } from '@books/application/use-cases/findById.use-case';
import inversifyConfig from "@core/inversify.config";

const getAllBooksUseCase = inversifyConfig.getFromContainer(GetAllBooksUseCase);
const findByNameUseCase = inversifyConfig.getFromContainer(FindByNameUseCase);
const findByIdUseCase = inversifyConfig.getFromContainer(FindByIdUseCase);

export { getAllBooksUseCase, findByNameUseCase, findByIdUseCase };