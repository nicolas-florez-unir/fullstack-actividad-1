import * as React from 'react';

import { BookEntity } from '@books/domain/entities';
import { CartItem } from '@cart/domain/cart-item.entity';

interface CardContextType {
  cart: CartItem[];
  addToCart: (book: BookEntity) => void;
  removeFromCart: (book: BookEntity) => void;
}

export const CartContext = React.createContext<CardContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});
