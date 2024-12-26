import { useState } from 'react';
import DebounceInput from '../DebounceInput';

export default function BookSearchInput() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (val: string) => {
    console.log('searching for', val);
    setSearchQuery(val);
  };

  return (
    <DebounceInput
      value={searchQuery}
      onChange={handleSearchChange}
      className="px-4 py-2 rounded-full focus:outline-none"
      placeholder="Buscar..."
    />
  );
}
