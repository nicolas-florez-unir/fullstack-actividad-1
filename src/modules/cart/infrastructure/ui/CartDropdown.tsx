import { useNavigate } from "react-router";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useSpring, animated } from "@react-spring/web";

import { Routes } from "@routes/index";
import CartItemCard from "./CartItemCard";
import { CartItem } from "@modules/cart/domain/cart-item.entity";
import { useEffect } from "react";

interface CartDropdownProps {
  onGoToCheckout: () => void;
  cartItems: CartItem[];
}

export default function CartDropdown({
  onGoToCheckout,
  cartItems,
}: CartDropdownProps) {
  const navigate = useNavigate();
  const [springs, api] = useSpring(() => ({
    from: { y: 0, opacity: 0 },
    config: { duration: 150 },
  }));

  useEffect(() => {
    api.start({
      from: {
        y: 0,
        opacity: 0,
      },
      to: {
        y: 10,
        opacity: 1,
      },
    });
  }, [api]);

  const handleGoToCheckout = () => {
    navigate(Routes.Checkout);
    onGoToCheckout();
  };

  return (
    <animated.div
      style={{ ...springs }}
      className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-neutral-800 shadow-lg rounded-md p-4 z-10"
    >
      <h3 className="font-semibold text-gray-800 dark:text-white border-b-2 border-slate-200 pb-1">
        Carrito de Compras
      </h3>
      <ul
        className="space-y-2 max-h-96 overflow-auto"
        style={{ scrollbarGutter: "stable" }}
      >
        {cartItems.length === 0 ? (
          <li className="text-gray-500 mt-2">Tu carrito está vacío</li>
        ) : (
          <div className="py-4 space-y-4">
            {cartItems.map((item, i) => (
              <CartItemCard quantity={item.quantity} book={item.book} key={i} />
            ))}
          </div>
        )}
      </ul>
      {cartItems.length > 0 && (
        <>
          <div className="flex justify-between text-gray-900 font-bold border-t-4 pt-2 border-slate-300">
            <span className="dark:text-white">Total:</span>
            <span className="text-green-600">
              {cartItems
                .reduce(
                  (total, item) => total + item.book.getPrice() * item.quantity,
                  0
                )
                .toFixed(2)}
            </span>
          </div>
          <div
            onClick={handleGoToCheckout}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-4 flex items-center justify-center gap-2 text-center cursor-pointer"
          >
            <MdShoppingCartCheckout size={21} />
            Pagar
          </div>
        </>
      )}
    </animated.div>
  );
}
