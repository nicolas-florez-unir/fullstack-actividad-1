import { BookRepository } from "@modules/books/domain/repositories/book.repository";
import { injectable, inject } from 'inversify';

@injectable()
export class FindByNameUseCase {
    constructor(@inject(BookRepository) private readonly bookRepository: BookRepository) {
    }
    async execute(name: string) {
        return await this.bookRepository.findByName(name);
    }
}