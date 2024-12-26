import { describe, it, expect, vi } from 'vitest';
import { FindByIdUseCase } from '@modules/books/application/use-cases/findById.use-case';
import { BookRepository } from '@modules/books/domain/repositories/book.repository';

describe('FindByIdUseCase', () => {
  it('should return a book when found', async () => {
    const mockBookRepository = {
      findById: vi.fn().mockResolvedValue({ id: 1, title: 'Test Book' }),
    } as unknown as BookRepository;

    const findByIdUseCase = new FindByIdUseCase(mockBookRepository);
    const result = await findByIdUseCase.execute(1);

    expect(mockBookRepository.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual({ id: 1, title: 'Test Book' });
  });

  it('should return null when book is not found', async () => {
    const mockBookRepository = {
      findById: vi.fn().mockResolvedValue(null),
    } as unknown as BookRepository;

    const findByIdUseCase = new FindByIdUseCase(mockBookRepository);
    const result = await findByIdUseCase.execute(2);

    expect(mockBookRepository.findById).toHaveBeenCalledWith(2);
    expect(result).toBeNull();
  });

  it('should throw an error when repository throws an error', async () => {
    const mockBookRepository = {
      findById: vi.fn().mockRejectedValue(new Error('Repository error')),
    } as unknown as BookRepository;

    const findByIdUseCase = new FindByIdUseCase(mockBookRepository);

    await expect(findByIdUseCase.execute(3)).rejects.toThrow(
      'Repository error'
    );
    expect(mockBookRepository.findById).toHaveBeenCalledWith(3);
  });
});
