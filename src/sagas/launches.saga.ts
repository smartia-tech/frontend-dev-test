
import axios from "axios";
import { put } from "redux-saga/effects";
import * as actions from "../actions/launches.action";
import { LaunchItem } from "../types/launches.types";

export function* getPastLaunches() {
    yield put(actions.initFetchPastLaunches());

    try {
        const response = yield axios.get('https://api.spacexdata.com/v4/launches');

        let data: LaunchItem[] = response.data;        

        yield put(actions.fetchFetchPastLaunchesSuccess(data));
    } catch (error) {
        yield put(actions.fetchFetchPastLaunchesFailure(error.message));
    }
}