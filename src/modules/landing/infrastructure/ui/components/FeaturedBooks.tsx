import { useEffect, useState } from "react";
import { getAllBooksUseCase } from "@modules/books/infrastructure";
import { BookEntity } from "@books/domain/entities/book.entity";
import BookCard from "@shared/components/Book/BookCard";

const FeaturedBooks = () => {
  const [books, setBooks] = useState<BookEntity[]>([]);

  useEffect(() => {
    getAllBooksUseCase.execute().then((books) => setBooks(books.slice(0, 3)));
  }, []);

  return (
    <section id="featured" className="py-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          Libros Destacados
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Descubre los libros más vendidos y recomendados por nuestros usuarios.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {books.map((book, i) => (
          <BookCard book={book} key={i} showBuyButton={false} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;
