
import { ActionTypes } from "../actions/types";
import { takeEvery } from "redux-saga/effects";
import { getPastLaunches } from "./launches.saga"

export function* watchers() {
    yield takeEvery(ActionTypes.FETCH_PAST_LAUNCH, getPastLaunches);
}