const paginateMethod = (list, currentIndex) => {
  let currentPage = currentIndex;
  if (currentIndex === 0) {
    currentPage = 1;
  }
  const startIndex = currentPage * 12 - 12;
  const endIndex = currentPage * 12;
  var paginatedList = list.slice(startIndex, endIndex);

  return paginatedList;
};

export default paginateMethod;
