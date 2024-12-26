import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BookEntity } from '../../domain/entities/book.entity';
import { findByIdUseCase } from '../providers/use-case.provider';
import { useCartContext } from '@modules/cart/application/hooks/useCartContext';
import { MdAddShoppingCart } from 'react-icons/md';

const BookDetail = () => {
  const [book, setBook] = useState<BookEntity | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const cartContext = useCartContext();

  const handleAddToCart = (book: BookEntity) => {
    cartContext.addToCart(book);
  };

  useEffect(() => {
    findByIdUseCase.execute(Number(id)).then((book) => {
      setBook(book);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (book === null) return <p>Book not found</p>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full flex flex-col align-middle gap-2">
          <img
            className="h-48 sm:h-64 md:h-80 object-contain rounded-lg"
            src={book.getImageUrl()}
            alt={book.getName()}
          />
          <button
            onClick={() => handleAddToCart(book)}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full w-full p-2 flex justify-center gap-2"
          >
            <MdAddShoppingCart size={24} />
            <span className="gap-2">Comprar</span>
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {book.getName()}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            by {book.getAuthor()}
          </p>
          <p className="text-xl font-semibold text-gray-800 dark:text-green-500">
            {book.getPrice()}
          </p>
          <p className="dark:text-gray-300 mt-4 text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quo
            nobis ipsum, odio possimus officia aut esse debitis tempora maiores
            deserunt ad dolorum voluptatem quia et beatae commodi sequi
            recusandae magnam voluptatibus. Similique ipsa magni vel illum
            adipisci accusamus eius voluptate explicabo porro magnam. Ea quae
            quam qui temporibus doloribus. Iure aliquam aperiam officiis et
            quam, alias sed? Distinctio, qui necessitatibus. Eaque nesciunt
            optio esse id explicabo doloribus pariatur sit aperiam! Aperiam
            distinctio similique facere ratione officia assumenda, quas fugiat
            saepe modi expedita quo reiciendis voluptatem? Accusantium adipisci
            veritatis eaque esse quis, numquam perspiciatis quod incidunt
            praesentium. Earum cupiditate consequatur esse, recusandae dolorem
            iure doloribus inventore voluptas corporis ipsum modi natus officiis
            exercitationem consectetur dolores sunt veniam soluta repellat rerum
            quis suscipit deleniti!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
