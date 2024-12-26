import { BookEntity } from '../entities/book.entity';

export abstract class BookRepository {
  abstract getAllBooks(): Promise<BookEntity[]>;
  abstract findById(id: number): Promise<BookEntity | null>;
  abstract findByName(name: string): Promise<BookEntity[]>;
}
