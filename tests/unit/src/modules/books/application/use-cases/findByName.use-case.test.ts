import { describe, it, expect, beforeEach } from 'vitest';
import { FindByNameUseCase } from '@modules/books/application/use-cases/findByName.use-case';
import { BookRepository } from '@modules/books/domain/repositories/book.repository';

class MockBookRepository implements BookRepository {
  private books = [{ name: 'Book 1' }, { name: 'Book 2' }];

  async findByName(name: string) {
    return this.books.find((book) => book.name === name);
  }
}

describe('FindByNameUseCase', () => {
  let findByNameUseCase: FindByNameUseCase;
  let mockBookRepository: MockBookRepository;

  beforeEach(() => {
    mockBookRepository = new MockBookRepository();
    findByNameUseCase = new FindByNameUseCase(mockBookRepository);
  });

  it('should find a book by name', async () => {
    const book = await findByNameUseCase.execute('Book 1');
    expect(book).toEqual({ name: 'Book 1' });
  });

  it('should return undefined if the book is not found', async () => {
    const book = await findByNameUseCase.execute('Nonexistent Book');
    expect(book).toBeUndefined();
  });

  it('should call findByName method of the repository', async () => {
    const spy = vi.spyOn(mockBookRepository, 'findByName');
    await findByNameUseCase.execute('Book 1');
    expect(spy).toHaveBeenCalledWith('Book 1');
  });
});
