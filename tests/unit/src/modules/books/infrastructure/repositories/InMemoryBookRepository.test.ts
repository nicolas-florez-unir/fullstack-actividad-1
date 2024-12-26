import { describe, test, expect } from 'vitest';
import { InMemoryBookRepository } from '@books/infrastructure/repositories/in-memory-book.repository';
import { BookEntity } from '@books/domain/entities/book.entity';
import { beforeEach } from 'node:test';

describe('InMemoryBookRepository', () => {
  const repository = new InMemoryBookRepository();

  const mockedBooks = [
    new BookEntity(
      1,
      '1984',
      'George Orwell',
      9.99,
      'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg'
    ),
    new BookEntity(
      2,
      'To Kill a Mockingbird',
      'Harper Lee',
      7.99,
      'https://cdn2.penguin.com.au/covers/original/9781784752637.jpg'
    ),
    new BookEntity(
      3,
      'The Great Gatsby',
      'F. Scott Fitzgerald',
      10.99,
      'https://images.cdn3.buscalibre.com/fit-in/360x360/82/30/8230acb585bd29fe2b5940f68ded7499.jpg'
    ),
    new BookEntity(
      4,
      'Moby Dick',
      'Herman Melville',
      8.99,
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524879761/the-great-gatsby-9781524879761_hr.jpg'
    ),
  ];

  beforeEach(() => {
    repository.setBooks(mockedBooks);
  });

  repository.setBooks(mockedBooks);

  test('should return all books', async () => {
    const books = await repository.getAllBooks();
    expect(books.length).toBe(mockedBooks.length);
    expect(books[0]).toBeInstanceOf(BookEntity);
  });

  test('should return a book by id', async () => {
    const book = await repository.findById(1);

    expect(book).toBeDefined();
    expect(book).toBeInstanceOf(BookEntity);

    expect(book?.getId()).toBe(mockedBooks[0].getId());
    expect(book?.getName()).toBe(mockedBooks[0].getName());
    expect(book?.getAuthor()).toBe(mockedBooks[0].getAuthor());
    expect(book?.getPrice()).toBe(mockedBooks[0].getPrice());
    expect(book?.getImageUrl()).toBe(mockedBooks[0].getImageUrl());
  });

  test("should return null if book by id doesn't exist", async () => {
    const unknownBook = await repository.findById(-1);

    expect(unknownBook).toBeNull();
  });

  test('should return a book by name', async () => {
    const book = await repository.findByName('19');

    expect(book).toBeDefined();
    expect(book).toBeInstanceOf(Array);
    expect(book?.length).toBe(1);
    expect(book?.[0].getName()).toBe('1984');
  });
});
