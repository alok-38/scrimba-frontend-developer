import { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form  onSubmit={handleSubmit}>
          <input className='mt-5 leading-9 border-2 border-solid border-orange-100 w-96 text-center focus:outline-none hover:border-orange-400'
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleChange}
          />
          <button className='leading-10 ml-10 bg-slate-600 pl-5 pr-5 text-white rounded-full hover:bg-slate-500' type="submit">Search</button>
        </form>
    );
}

export default Search