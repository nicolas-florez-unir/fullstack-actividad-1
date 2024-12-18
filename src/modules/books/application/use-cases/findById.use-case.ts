import { BookRepository } from "@modules/books/domain/repositories/book.repository";
import { injectable, inject } from 'inversify';

@injectable()
export class FindByIdUseCase {
    constructor(@inject(BookRepository) private readonly bookRepository: BookRepository) {
    }
    async execute(id: number) {
        return await this.bookRepository.findById(id);
    }
}