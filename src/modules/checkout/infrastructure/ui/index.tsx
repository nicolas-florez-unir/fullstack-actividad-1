import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useCartContext } from '@cart/application/hooks/useCartContext';
import CardItemCard from '@modules/cart/infrastructure/ui/CartItemCard';
import { Routes } from '@routes/index';
import { createPortal } from 'react-dom';
import CheckoutConfirmationModal from './components/CheckoutConfirmationModal';
import { useSpring, animated } from '@react-spring/web';

export default function Checkout() {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { cart, clearCart } = useCartContext();
  const navigate = useNavigate();
  const fade = useSpring({
    opacity: showConfirmationModal ? 1 : 0,
    config: { duration: 120 },
  });

  useEffect(() => {
    if (cart.length === 0) {
      navigate(Routes.Home);
    }
  }, [cart, navigate]);

  const handlePaymentConfirmation = () => {
    clearCart();
    setShowConfirmationModal(false);
  };

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
          onClick={() => setShowConfirmationModal(true)}
        >
          Realizar Pago
        </button>
      </div>

      {showConfirmationModal &&
        createPortal(
          <animated.div
            style={fade}
            className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[9999] flex justify-center items-center"
          >
            <CheckoutConfirmationModal
              isOpen
              onConfirm={handlePaymentConfirmation}
            />
          </animated.div>,
          document.getElementById('modal-container-root') as HTMLElement
        )}
    </div>
  );
}
