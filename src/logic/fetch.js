const baseUrl = 'https://api.spacexdata.com/v4';
const pastLaunches = 'launches/past';

const fetchLaunches = () => fetch(`${baseUrl}/${pastLaunches}`)
  .then(response => response.json())
  .then(response => response)
  .catch(error => error);

export default fetchLaunches;
