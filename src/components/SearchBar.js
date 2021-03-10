import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  return (
      <div className="search-bar-wrapper">
        <input 
        className="search-bar"
        value={keyword}
        placeholder={"Search for a launch.."}
        onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
  );
}

export default SearchBar;