import { BookRepository } from '@books/domain/repositories/book.repository';
import { inject, injectable } from 'inversify';

@injectable()
export class GetAllBooksUseCase {
  constructor(@inject(BookRepository) private bookRepository: BookRepository) {}

  async execute() {
    return await this.bookRepository.getAllBooks();
  }
}
