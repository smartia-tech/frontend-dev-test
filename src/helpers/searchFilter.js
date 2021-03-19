export default function filterLaunches(launches, query) {
  if (query) {
    return launches.filter((launch) => launch.name.toLowerCase().includes(query));
  }
  return launches;
}
