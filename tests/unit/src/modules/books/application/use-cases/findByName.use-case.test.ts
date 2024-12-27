import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FindByNameUseCase } from '@modules/books/application/use-cases/findByName.use-case';
import { BookRepository } from '@modules/books/domain/repositories/book.repository';
import { BookEntity } from '@modules/books/domain/entities';

const books = [
  new BookEntity(
    1,
    'Book 1',
    'George Orwell',
    9.99,
    'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg'
  ),
  new BookEntity(
    2,
    'Book 2',
    'Harper Lee',
    7.99,
    'https://cdn2.penguin.com.au/covers/original/9781784752637.jpg'
  ),
  new BookEntity(
    3,
    'Book 3',
    'F. Scott Fitzgerald',
    10.99,
    'https://images.cdn3.buscalibre.com/fit-in/360x360/82/30/8230acb585bd29fe2b5940f68ded7499.jpg'
  ),
];

class MockBookRepository implements BookRepository {
  getAllBooks(): Promise<BookEntity[]> {
    throw new Error('Method not implemented.');
  }

  async findByName(name: string): Promise<BookEntity[]> {
    return books.filter((book) => book.getName().toLowerCase().includes(name));
  }

  findById(): Promise<BookEntity | null> {
    throw new Error('Method not implemented.');
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
    const book = await findByNameUseCase.execute('book');
    expect(book.length).toBeGreaterThan(0);
  });

  it('should return undefined if the book is not found', async () => {
    const book = await findByNameUseCase.execute('Nonexistent Book');
    expect(book.length).toBe(0);
  });

  it('should call findByName method of the repository', async () => {
    const spy = vi.spyOn(mockBookRepository, 'findByName');
    await findByNameUseCase.execute('Book 1');
    expect(spy).toHaveBeenCalledWith('Book 1');
  });
});
