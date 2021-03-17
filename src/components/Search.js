import PropTypes from 'prop-types';

const Search = ({ query, setQuery }) => {
  const handleChange = val => {
    setQuery(val);
  };

  return (
    <input
      className="Header__searchbar--custom"
      value={query}
      placeholder="Search by launch name..."
      onChange={e => handleChange(e.target.value)}
    />
  );
};
Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Search;
