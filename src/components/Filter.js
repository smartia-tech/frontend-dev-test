
const Filter = ({ entry, handleInputChange }) => {
  return (<input type="text" value={entry} onChange={handleInputChange} />)
}

export default Filter;