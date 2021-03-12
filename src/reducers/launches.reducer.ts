import { ActionTypes } from "../actions/types";
import { LaunchStore, PastLaunchActions } from "../types/launches.types";
import { formatDate } from "../helpers/store";

const pastLaunchStore = {
    status: ActionTypes.NOT_LOADED,
    error: false,
    message: "",
    default: [],
    data: []
};

export const launches = (
    state: LaunchStore = pastLaunchStore,
    action: PastLaunchActions
) => {
    switch (action.type) {
        case ActionTypes.FETCH_PAST_LAUNCH_LOADING: {
            return {
                ...state,
                status: ActionTypes.IS_LOADING,
                error: false,
            };
        }

        case ActionTypes.FETCH_PAST_LAUNCH_SUCCESS: {

            for (let i = 0; i < action.data.length; i++) {
                action.data[i].formatted_date = formatDate(action.data[i].date_unix);
            }

            action.data.sort(function (x, y) {
                return y.date_unix - x.date_unix;
            });

            return {
                ...state,
                status: ActionTypes.LOADED,
                error: false,
                default: action.data,
                data: action.data,
            };
        }

        case ActionTypes.FILTER_PAST_LAUNCH: {

            let data = state.default;
            let filtered = [];

            if (action.query.length > 0) {
                let pattern = new RegExp(action.query.toLowerCase());

                for (let i = 0; i < data.length; i++) {
                    if (data[i].name.toLowerCase().match(pattern)) {
                        filtered.push(data[i])
                    }
                }

                return {
                    ...state,
                    data: filtered
                };
            } else {
                return {
                    ...state,
                    data: state.default
                };
            }

        }

        case ActionTypes.FETCH_PAST_LAUNCH_ERROR: {
            return {
                ...state,
                status: ActionTypes.LOADING_FAILED,
                error: true,
                message: action.message
            };
        }

        default: {
            return state;
        }
    }
};