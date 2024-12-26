import { describe, it, expect, vi } from 'vitest';
import { GetAllBooksUseCase } from '@books/application/use-cases/getAllBook.use-case';
import { BookRepository } from '@books/domain/repositories/book.repository';

describe('GetAllBooksUseCase', () => {
  it('should return all books', async () => {
    const mockBooks = [
      { id: 1, title: 'Book 1' },
      { id: 2, title: 'Book 2' },
    ];
    const bookRepository = {
      getAllBooks: vi.fn().mockResolvedValue(mockBooks),
    } as unknown as BookRepository;

    const getAllBooksUseCase = new GetAllBooksUseCase(bookRepository);

    const result = await getAllBooksUseCase.execute();

    expect(result).toEqual(mockBooks);
    expect(bookRepository.getAllBooks).toHaveBeenCalledTimes(1);
  });

  it('should handle errors', async () => {
    const error = new Error('Something went wrong');
    const bookRepository = {
      getAllBooks: vi.fn().mockRejectedValue(error),
    } as unknown as BookRepository;

    const getAllBooksUseCase = new GetAllBooksUseCase(bookRepository);

    await expect(getAllBooksUseCase.execute()).rejects.toThrow(error);
    expect(bookRepository.getAllBooks).toHaveBeenCalledTimes(1);
  });
});
