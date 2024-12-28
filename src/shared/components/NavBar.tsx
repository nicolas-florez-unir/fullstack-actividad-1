import { useSpring, animated } from '@react-spring/web';
import { MdShoppingCart, MdSearch } from 'react-icons/md';

import CartDropdown from '@modules/cart/infrastructure/ui/CartDropdown';
import { useEffect, useState } from 'react';
import { useCartContext } from '@modules/cart/application/hooks/useCartContext';
import DebounceInput from './DebounceInput';
import { findByNameUseCase } from '@modules/books/infrastructure';
import { BookEntity } from '@modules/books/domain/entities';
import SearchResultDropdown from './Search/SearchResultDropdown';
import ClickAwayComponent from './ClickAwayComponent';
import { useNavigate } from 'react-router';
import { Routes } from '@routes/index';

const SearchBook = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foundBooks, setFoundBooks] = useState<BookEntity[]>([]);
  const [resultVisible, setResultVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResultVisible(false);
      return;
    }

    const find = async (search: string) => {
      const results = await findByNameUseCase.execute(search);
      setFoundBooks(results);
      setResultVisible(true);
    };

    find(searchQuery);
  }, [searchQuery]);

  const handleResultClick = (book: BookEntity) => {
    navigate(Routes.BookDetail + book.getId());
    setResultVisible(false);
  };

  return (
    <ClickAwayComponent
      className="relative"
      onClickAway={() => setResultVisible(false)}
    >
      <div className="relative inline-block w-full md:w-auto">
        <DebounceInput
          value={searchQuery}
          onChange={(value) => setSearchQuery(value)}
          className="px-4 py-2 rounded-full focus:outline-none border-2 w-full md:w-64"
          placeholder="Buscar..."
        />

        {resultVisible && (
          <SearchResultDropdown
            books={foundBooks}
            onResultClick={handleResultClick}
          />
        )}
      </div>
    </ClickAwayComponent>
  );
};

const SeeCart = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const { cart, clearCart } = useCartContext();
  const cartTotalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const [springs, api] = useSpring(() => ({
    from: { width: 24, height: 24 },
    config: { duration: 100 },
  }));

  useEffect(() => {
    api.start({
      to: [
        {
          width: 28,
          height: 28,
        },
        {
          width: 24,
          height: 24,
        },
      ],
    });
  }, [api, cart]);

  return (
    <ClickAwayComponent
      onClickAway={() => setCartVisible(false)}
      className="relative"
    >
      <div className="relative inline-block">
        <button
          onClick={() => setCartVisible(!cartVisible)}
          className="bg-violet-600 dark:bg-violet-500 text-white p-2 rounded-full focus:outline-none flex gap-2"
        >
          <MdShoppingCart size={24} />
        </button>

        {cartTotalQuantity > 0 && (
          <animated.div
            style={{ ...springs }}
            className="absolute -top-3 -right-2 bg-violet-600 dark:bg-violet-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center"
          >
            {cartTotalQuantity > 9 ? '+9' : cartTotalQuantity}
          </animated.div>
        )}
      </div>

      {cartVisible && (
        <CartDropdown
          onDeleteClick={() => clearCart()}
          onGoToCheckout={() => setCartVisible(false)}
          cartItems={cart}
        />
      )}
    </ClickAwayComponent>
  );
};

const NavBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-neutral-900 px-4 py-4 flex justify-between items-center border-b-2 border-b-violet-600 dark:border-b-violet-500 md:px-24 md:py-6 sticky top-0 z-50">
      <div
        className="text-xl font-bold text-violet-600 dark:text-violet-500 md:text-2xl cursor-pointer"
        onClick={() => navigate(Routes.Home)}
      >
        Relatos de papel
      </div>

      <div className="hidden md:flex items-center space-x-2 md:space-x-4">
        <SearchBook />
        <SeeCart />
      </div>

      <div className="flex md:hidden items-center space-x-4">
        <button
          onClick={() => setIsSearchVisible(!isSearchVisible)}
          className="bg-violet-600 dark:bg-violet-500 text-white p-2 rounded-full"
        >
          <MdSearch size={24} />
        </button>

        {isSearchVisible && <SearchBook />}

        <SeeCart />
      </div>
    </nav>
  );
};

export default NavBar;
