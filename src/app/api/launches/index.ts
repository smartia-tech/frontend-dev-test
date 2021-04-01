import request from "../request";
import { LaunchesResponse, LaunchQuery } from "./types";

const queryLaunches = async (payload: LaunchQuery) => {
  const data = {
    query: { name: { $regex: `^${payload.search}`, $options: "i" } },
    options: { page: payload.page },
  };
  return await request.post<LaunchesResponse>("/launches/query", data);
};

const lauchesService = { queryLaunches };

export default lauchesService;
