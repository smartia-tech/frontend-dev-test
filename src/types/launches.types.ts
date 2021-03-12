import { ActionTypes } from "../actions/types";

export interface InitFetchPastLaunches {
    type: ActionTypes.FETCH_PAST_LAUNCH_LOADING;
}

export interface FetchPastLaunches {
    type: ActionTypes.FETCH_PAST_LAUNCH;
}

export interface FetchPastLaunchesSuccess {
    type: ActionTypes.FETCH_PAST_LAUNCH_SUCCESS;
    data: LaunchItem[];
}

export interface FetchPastLaunchesError {
    type: ActionTypes.FETCH_PAST_LAUNCH_ERROR;
    message: string;
}

export interface FilterFetchPastLaunches {
    type: ActionTypes.FILTER_PAST_LAUNCH;
    query: string;
}

export type PastLaunchActions =
    | InitFetchPastLaunches
    | FetchPastLaunches
    | FetchPastLaunchesSuccess
    | FetchPastLaunchesError
    | FilterFetchPastLaunches;


// Launch item
export interface LaunchItem {
    "fairings": {
        "reused": boolean,
        "recovery_attempt": boolean,
        "recovered": boolean,
        "ships": Array<string>[]
    },
    "links": {
        "patch": {
            "small": string,
            "large": string
        },
        "reddit": {
            "campaign": string | null,
            "launch": string | null,
            "media": string | null,
            "recovery": string | null,
        },
        "flickr": {
            "small": Array<string>[],
            "original": Array<string>[],
        },
        "presskit": string | null,
        "webcast": string,
        "youtube_id": string,
        "article": string,
        "wikipedia": string,
    },
    "static_fire_date_utc": string,
    "static_fire_date_unix": number,
    "tbd": boolean,
    "net": boolean,
    "window": number,
    "rocket": string,
    "success": boolean,
    "details": string,
    "crew": Array<string>[],
    "ships": Array<string>[],
    "capsules": Array<string>[],
    "payloads": Array<string>[],
    "launchpad": string,
    "auto_update": boolean,
    "launch_library_id": string | null,
    "failures": [
        {
            "time": number,
            "altitude": number | null,
            "reason": string
        }
    ],
    "flight_number": number,
    "name": string,
    "date_utc": string,
    "date_unix": number,
    "date_local": string,
    "date_precision": string,
    "formatted_date"?: string,
    "upcoming": boolean,
    "cores": Core[],
    "id": string,
};

export interface Core {
    "core": string,
    "flight": number,
    "gridfins": boolean,
    "legs": boolean,
    "reused": boolean,
    "landing_attempt": boolean,
    "landing_success": boolean | null,
    "landing_type": boolean | null,
    "landpad": boolean | null
}

// Reducer state
export interface LaunchStore {
    status: string;
    error: boolean;
    message: string;
    default: LaunchItem[];
    data: LaunchItem[];
}