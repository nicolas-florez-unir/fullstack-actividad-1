import React from 'react';
import { useNavigate } from 'react-router';

import { BookEntity } from '@books/domain/entities/book.entity';
import { useCartContext } from '@cart/application/hooks/useCartContext';
import { Routes } from '@routes/index';
import { MdAddShoppingCart } from 'react-icons/md';
import styles from './BookCard.module.css';

interface BookCardProps {
  book: BookEntity;
  showBuyButton: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ book, showBuyButton = true }) => {
  const cartContext = useCartContext();
  const navigate = useNavigate();

  const handleAddToCart = (book: BookEntity) => {
    cartContext.addToCart(book);
  };

  const handleBookClick = () => {
    navigate(`${Routes.BookDetail}${book.getId()}`);
  };

  return (
    <div
      key={book.getId()}
      className="bg-white shadow-lg rounded-xl overflow-hidden dark:bg-neutral-800"
    >
      <div
        className="coverContainer relative hover:cursor-pointer"
        onClick={handleBookClick}
      >
        <img
          src={book.getImageUrl()}
          className="bg-gray-500-300 h-80 w-full relative blur-lg"
        />
        <img
          src={book.getImageUrl()}
          alt={book.getName()}
          className={`w-full h-80 object-contain absolute top-0 ${styles.imageCover}`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold dark:text-white line-clamp-1">
          {book.getName()}
        </h3>
        <div>
          <p className="text-gray-500 dark:text-gray-300">{book.getAuthor()}</p>
          <p className="text-lg font-bold text-green-600 mt-2">
            ${book.getPrice()}
          </p>
        </div>
        <div className="flex justify-between gap-4 mt-4">
          {showBuyButton && (
            <button
              onClick={() => handleAddToCart(book)}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full w-full p-2 flex justify-center gap-2"
            >
              <MdAddShoppingCart size={24} />
              <span className="gap-2">Comprar</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
