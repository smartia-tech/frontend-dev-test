const filterLaunches = (list, query) => {
  if (query === '') return list;
  return list.filter(launch => launch.name.toLowerCase().includes(query.toLowerCase()));
};

export default filterLaunches;
