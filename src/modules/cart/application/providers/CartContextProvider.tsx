import { useState } from "react";

import { BookEntity } from "@books/domain/entities";
import { CartContext } from "../contexts/CartContext";

interface CartItem {
  book: BookEntity;
  quantity: number;
}

export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (book: BookEntity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.book.getId() === book.getId());

      // Es un libro nuevo en el carrito
      if(!existingItem) return [...prevCart, { book, quantity: 1 }];

      // Es un libro que ya estaba en el carrito, incrementamos la cantidad
      return prevCart.map((item) => item.book.getId() === book.getId() ? { ...item, quantity: item.quantity + 1 } : item);
    });
  };

  const removeFromCart = (book: BookEntity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.book.getId() === book.getId());

      // si no existe el libro en el carrito, no hacemos nada
      if (!existingItem) return prevCart;

      // si solo queda un libro, lo eliminamos del carrito
      if (existingItem.quantity === 1) return prevCart.filter((item) => item.book.getId() !== book.getId());

      // si hay más de un libro, reducimos la cantidad
      return prevCart.map((item) => item.book.getId() === book.getId() ? { ...item, quantity: item.quantity - 1 } : item);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
