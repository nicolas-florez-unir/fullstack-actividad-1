import { NavLink } from 'react-router';
import { Routes } from '@routes/index';

const NavBar = () => {
  return (
    <nav className="px-4 py-4 flex justify-between items-center border-b-2 border-b-violet-600 dark:border-b-violet-500 md:px-24 md:py-6">
      <div
        className="text-xl font-bold text-violet-600 dark:text-violet-500 md:text-2xl"
      >
        Relatos de papel
      </div>

      <div className="relative">
        <NavLink
          to={Routes.Home}
          className="bg-violet-600 dark:bg-violet-500 text-white px-4 py-2 rounded-full focus:outline-none font-bold"
        >
          Ingresar
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
