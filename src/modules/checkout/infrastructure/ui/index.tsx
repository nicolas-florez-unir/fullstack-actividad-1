import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useCartContext } from '@cart/application/hooks/useCartContext';
import CardItemCard from '@modules/cart/infrastructure/ui/CartItemCard';
import { Routes } from '@routes/index';

export default function Checkout() {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      navigate(Routes.Home);
    }
  }, [cart, navigate]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {cart.map((item, i) => (
          <CardItemCard book={item.book} key={i} quantity={item.quantity} />
        ))}
      </div>
      <div className="flex justify-between mt-6 px-8">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-full w-full mr-2"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-full w-full ml-2"
          onClick={() => console.log('Pagando')}
        >
          Realizar Pago
        </button>
      </div>
    </div>
  );
}
