import { NavLink } from 'react-router';
import { Routes } from '@routes/index';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 dark:bg-slate-800 px-4 py-6 flex justify-between items-center">
      {/* Logo o título de la aplicación */}
      <div className="text-white text-xl font-bold">Relatos de papel</div>

      {/* Botón de carrito */}
      <div className="relative">
        <NavLink
          to={Routes.Home}
          className="bg-blue-700 text-white px-4 py-2 rounded-full focus:outline-none font-bold"
        >
          Ingresar
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
