import { BookEntity } from "@modules/books/domain/entities";
import BookHorizontalCard from "@shared/components/Book/BookHorizontalCard";
import QuantityInput from "@shared/components/QuantityInput";
import { useCartContext } from '../../application/hooks/useCartContext';

interface CardItemCardProps {
  book: BookEntity;
  quantity: number;
}

export default function CardItemCard({ book, quantity }: CardItemCardProps) {
  const { removeFromCart, addToCart } = useCartContext();
  return (
    <BookHorizontalCard book={book}>
      <QuantityInput
        value={quantity}
        onDecrease={() => removeFromCart(book)}
        onIncrease={() => addToCart(book)}
        classname="mt-3"
      />
    </BookHorizontalCard>
  );
}
