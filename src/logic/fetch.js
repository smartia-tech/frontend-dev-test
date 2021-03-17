const baseUrl = 'https://api.spacexdata.com/v4';
const pastLaunches = 'launches/past';

const fetchLaunches = () => {
  try {
    return fetch(`${baseUrl}/${pastLaunches}`)
      .then(response => response.json())
      .then(response => response)
      .catch(error => error.message);
  } catch (error) {
    return error.message;
  }
};

export default fetchLaunches;
