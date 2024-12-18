import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { BookEntity } from '../../domain/entities/book.entity';
import { findByIdUseCase } from "../providers/use-case.provider";

const BookDetail = () => {
  const [book, setBook] = useState<BookEntity | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    findByIdUseCase.execute(Number(id)).then((book) => {
      setBook(book);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Loading</p>;
  if (book === null) return <p>Book not found</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center">
        <img
          className="w-full h-48 sm:w-48 object-cover"
          src={book.getImageUrl()}
          alt={book.getName()}
        />
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">{book.getName()}</h2>
          <p className="text-gray-700">by {book.getAuthor()}</p>
          <p className="mt-4 text-gray-600">{book.getPrice()}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
