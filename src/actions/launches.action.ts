import { ActionTypes } from "./types";
import * as Types from "../types/launches.types";

// Fetch past launches
export const initFetchPastLaunches = (): Types.InitFetchPastLaunches => {
    return {
        type: ActionTypes.FETCH_PAST_LAUNCH_LOADING,
    };
};

export const fetchPastLaunches = (): Types.FetchPastLaunches => {
    return {
        type: ActionTypes.FETCH_PAST_LAUNCH,
    };
};

export const fetchFetchPastLaunchesSuccess = (
    data: Types.LaunchItem[]
): Types.FetchPastLaunchesSuccess => {
    return {
        type: ActionTypes.FETCH_PAST_LAUNCH_SUCCESS,
        data: data,
    };
};

export const fetchFetchPastLaunchesFailure = (
    message: string
): Types.FetchPastLaunchesError => {
    return {
        type: ActionTypes.FETCH_PAST_LAUNCH_ERROR,
        message: message,
    };
};

export const filterFetchPastLaunches = (
    query: string
): Types.FilterFetchPastLaunches => {
    return {
        type: ActionTypes.FILTER_PAST_LAUNCH,
        query: query,
    };
};