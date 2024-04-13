import Search from "./components/Search";
import Results from "./components/Results";

import { useState } from 'react';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    // Mock API call or data retrieval logic
    const data = [
      { id: 1, name: 'Result 1' },
      { id: 2, name: 'Result 2' },
      { id: 3, name: 'Result 3' },
    ];

    // Simulating async behavior with setTimeout
    setTimeout(() => {
      setResults(data);
    }, 1000);
  };

  return (
    <main className="m-10">
      <div className="flex gap-32">
        <h1 className="text-xl bg-orange-400 text-white tracking-wide rounded-full p-5">Search App</h1>
        <Search onSearch={handleSearch} />
      </div>
      <div className="text-xl leading-10">
      < Results data={results} />
      </div>
    </main>
  );
};

export default App


