import { useEffect, useRef } from "react";

interface ClickAwayComponentProps {
  children: React.ReactNode;
  onClickAway: () => void;
  className?: string;
}

/**
 * Componente que detecta clics fuera de su área y ejecuta una función de callback.
 *
 * @param {React.ReactNode} children - Los elementos hijos que se renderizarán dentro del componente.
 * @param {() => void} onClickAway - Función de callback que se ejecuta cuando se detecta un clic fuera del componente.
 * @param {string} [className] - Clase CSS opcional para aplicar al contenedor del componente.
 *
 * @returns {JSX.Element} Un contenedor `div` que envuelve los elementos hijos y detecta clics fuera de su área.
 */
export default function ClickAwayComponent({
  children,
  onClickAway,
  className,
}: ClickAwayComponentProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClickAway();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClickAway]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
