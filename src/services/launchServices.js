import {
    spaceXLaunches
} from 'redux/actions/launchActions';
import { DEFAULT_ERROR } from 'config/CONSTANTS';
import {
    GET_PAST_LAUNCHES,
    SEARCH_PAST_LAUNCHES
} from './CONSTANTS';

export const getPastSpaceXLaunches = () => (dispatch) => fetch(GET_PAST_LAUNCHES(), {
        method: 'get',
    })
    .then((res) => res.json())
    .then((json) => {
        dispatch(spaceXLaunches({ status: 'success', data: json }));
        return json.users;
    })
    .catch(() => dispatch(spaceXLaunches({ status: 'error', message: DEFAULT_ERROR })));

export const searchPastLaunches = (payload) => (dispatch) => fetch(SEARCH_PAST_LAUNCHES(), {
        method: 'post',
        body: {
            query: payload
        }
    })
    .then((res) => res.json())
    .then((json) => {
        dispatch(spaceXLaunches({ status: 'success', data: json }));
        return json.users;
    })
    .catch(() => dispatch(spaceXLaunches({ status: 'error', message: DEFAULT_ERROR })));