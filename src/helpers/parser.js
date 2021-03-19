export default {
  get: (data) => {
    if (Array.isArray(data)) {
      return data.map((launch, index) => ({
        id: launch.id,
        name: launch.name,
        date: new Intl.DateTimeFormat('en-GB').format(new Date(launch.date_utc)),
        landingStatus: launch.cores[index]?.landing_success,
        imageUrl: launch.links.patch.small,
      }));
    }

    return {
      id: data?.id,
      name: data?.name,
      date: data && new Intl.DateTimeFormat('en-GB').format(new Date(data?.date_utc)),
      landingStatus: data?.cores[0]?.landing_success,
      imageUrl: data?.links.patch.small,
    };
  },
};
