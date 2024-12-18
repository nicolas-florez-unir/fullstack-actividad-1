import { BookEntity } from "@modules/books/domain/entities";
import React from "react";

interface BookHorizontalCardProps {
  book: BookEntity;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const BookHorizontalCard: React.FC<BookHorizontalCardProps> = ({
  book,
  children,
  onClick,
  className = '',
}) => (
  <div
    className={`flex bg-white dark:bg-neutral-800 shadow-md rounded-lg overflow-hidden ${className}`}
    onClick={onClick}
  >
    <img
      className="w-1/3 max-h-60 object-cover"
      src={book.getImageUrl()}
      alt={book.getName()}
    />
    <div className="w-2/3 p-4">
      <h2 className="text-xl dark:text-white font-bold mb-2">{book.getName()}</h2>
      <h3 className="text-md text-gray-600 dark:text-gray-400 mb-4">{book.getAuthor()}</h3>
      <p className="text-gray-700 dark:text-gray-200 text-sm font-bold">${book.getPrice()}</p>
      {children}
    </div>
  </div>
);

export default BookHorizontalCard;
