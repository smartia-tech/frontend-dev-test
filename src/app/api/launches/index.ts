import request from "../request";
import { LaunchesResponse, LaunchQuery } from "./types";

const queryLaunches = async (payload: LaunchQuery) => {
  return await request.post<LaunchesResponse>("/launches/query", {
    query: { name: { $regex: `^${payload.search}`, $options: "i" } },
    options: { page: payload.page },
  });
};

const lauchesService = { queryLaunches };

export default lauchesService;
