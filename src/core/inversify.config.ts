import { Container, interfaces } from 'inversify';
import { BookRepository } from '@modules/books/domain/repositories/book.repository';
import { InMemoryBookRepository } from '@books/infrastructure/repositories/in-memory-book.repository';
import { GetAllBooksUseCase } from '@modules/books/application/use-cases/getAllBook.use-case';
import { FindByIdUseCase } from '@modules/books/application/use-cases/findById.use-case';
import { FindByNameUseCase } from '@modules/books/application/use-cases/findByName.use-case';

class InversifyConfig {
  private readonly container: Container = new Container();

  constructor() {
    this.bindRepositories();
    this.bindUseCases();
  }

  private bindRepositories() {
    this.container.bind(BookRepository).to(InMemoryBookRepository);
  }

  private bindUseCases() {
    this.container.bind(GetAllBooksUseCase).toSelf();
    this.container.bind(FindByIdUseCase).toSelf();
    this.container.bind(FindByNameUseCase).toSelf();
  }

  getFromContainer<T>(key: interfaces.ServiceIdentifier<T>): T {
    return this.container.get(key);
  }
}

const inversifyConfig = new InversifyConfig();
export default inversifyConfig;
