const filterLaunches = (list, query) => {
  list.filter(launch => launch.name.toLowerCase().includes(query.toLowerCase()));
};

export default filterLaunches;
