import { BookEntity } from '@modules/books/domain/entities';
import BookHorizontalCard from '../Book/BookHorizontalCard';

interface SearchResultDropdownProps {
  books: BookEntity[];
  onResultClick: (book: BookEntity) => void;
}

function EmptyResult() {
  return (
    <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-md p-4 z-10">
      <h3 className="font-semibold text-gray-800 border-b-2 border-slate-200 pb-1">
        Resultados de la Búsqueda
      </h3>
      <div className="py-4 space-y-4">
        <p className="text-gray-500 text-center">
          No se encontraron resultados
        </p>
      </div>
    </div>
  );
}

export default function SearchResultDropdown(props: SearchResultDropdownProps) {
  if (props.books.length === 0) {
    return <EmptyResult />;
  }

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-neutral-800 shadow-lg rounded-md p-4 z-10">
      <h3 className="font-semibold text-gray-800 dark:text-white border-b-2 border-slate-200 pb-1">
        Resultados de la Búsqueda
      </h3>
      <ul
        className="space-y-2 max-h-96 overflow-auto"
        style={{ scrollbarGutter: 'stable' }}
      >
        <div className="py-4 space-y-4">
          {props.books.map((book, i) => (
            <BookHorizontalCard
              book={book}
              key={i}
              className="cursor-pointer"
              onClick={() => props.onResultClick(book)}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}
