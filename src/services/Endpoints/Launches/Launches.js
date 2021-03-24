import api from "services/api";

export const getLaunches = (params = {}) => {
  return api.get(`launches`, {
    params: { ...params },
  });
};

export const getLaunchesByQuery = (query = {}) => {
  return api.post(`launches/query`, {
    ...query,
  });
};
