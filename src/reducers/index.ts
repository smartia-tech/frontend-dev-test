import { combineReducers } from "redux";
import { launches } from "./launches.reducer";
import { LaunchStore } from "../types/launches.types";

export interface Store {
    launches: LaunchStore;
}

export default combineReducers<Store>({
    launches: launches
});