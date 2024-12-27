import { describe, it, expect, beforeEach } from 'vitest';
import { InversifyConfig } from '@core/inversify.config';
import { BookRepository } from '@modules/books/domain/repositories/book.repository';
import { InMemoryBookRepository } from '@books/infrastructure/repositories/in-memory-book.repository';
import { GetAllBooksUseCase } from '@modules/books/application/use-cases/getAllBook.use-case';
import { FindByIdUseCase } from '@modules/books/application/use-cases/findById.use-case';
import { FindByNameUseCase } from '@modules/books/application/use-cases/findByName.use-case';

describe('InversifyConfig', () => {
  let config: InversifyConfig;

  beforeEach(() => {
    config = new InversifyConfig();
  });

  it('should bind BookRepository to InMemoryBookRepository', () => {
    const repository = config.getFromContainer(BookRepository);
    expect(repository).toBeInstanceOf(InMemoryBookRepository);
  });

  it('should bind GetAllBooksUseCase to self', () => {
    const useCase = config.getFromContainer(GetAllBooksUseCase);
    expect(useCase).toBeInstanceOf(GetAllBooksUseCase);
  });

  it('should bind FindByIdUseCase to self', () => {
    const useCase = config.getFromContainer(FindByIdUseCase);
    expect(useCase).toBeInstanceOf(FindByIdUseCase);
  });

  it('should bind FindByNameUseCase to self', () => {
    const useCase = config.getFromContainer(FindByNameUseCase);
    expect(useCase).toBeInstanceOf(FindByNameUseCase);
  });
});
