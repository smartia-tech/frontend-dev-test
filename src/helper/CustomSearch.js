const CustomSearch = (searchEntry, searchArray, searchProperty) => {
  let filteredAlbums;
  if (searchEntry !== "") {
    filteredAlbums = searchArray.filter((element) => {
      return element[searchProperty].toLowerCase().includes(searchEntry);
    });
  } else {
    filteredAlbums = [...searchArray];
  }
  return filteredAlbums;
};

export default CustomSearch;
