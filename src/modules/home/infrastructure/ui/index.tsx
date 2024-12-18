import React, { useEffect, useState } from "react";

import { BookEntity } from "@books/domain/entities";
import { getAllBooksUseCase } from "@books/infrastructure";
import BookCard from "@shared/components/Book/BookCard";

const Home: React.FC = () => {
  const [books, setBooks] = useState<BookEntity[]>([]);

  useEffect(() => {
    getAllBooksUseCase.execute().then((books) => setBooks(books));
  }, []);

  return (
    <div className="container max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Nuestros libros</h1>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book, i) => (
          <BookCard book={book} key={i} showBuyButton />
        ))}
      </div>
    </div>
  );
};

export default Home;
