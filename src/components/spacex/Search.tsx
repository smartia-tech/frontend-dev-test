import React from 'react';

import { Context, ContextValues } from '../../context';

const Search: React.FC = () => {
  const [inputTxt, setInputTxt] = React.useState<string>('');

  const { fetchLaunches } = React.useContext(Context) as ContextValues;

  const onSubmit = (e: any) => {
    e.preventDefault();

    fetchLaunches(inputTxt);
  };
  return (
    <div>
      <h2>Search for Launches by name</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Launch name.."
          onChange={(e) => setInputTxt(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
