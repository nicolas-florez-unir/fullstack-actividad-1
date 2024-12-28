import React from 'react';

interface CheckoutConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
}

const CheckoutConfirmationModal: React.FC<CheckoutConfirmationModalProps> = ({
  isOpen,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 z-10 max-w-xl">
        <h2 className="text-xl font-semibold text-violet-600 dark:text-violet-500">
          Pedido confirmado
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Se ha realizado el pedido, te estaremos contactando en caso de que
          suceda alguna novedad
        </p>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-violet-600 dark:bg-violet-500 text-white rounded-full hover:bg-violet-700"
            onClick={onConfirm}
          >
            Entendido!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutConfirmationModal;
