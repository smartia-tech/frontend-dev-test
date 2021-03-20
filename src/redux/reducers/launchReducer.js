import {
     SPACEX_LAUNCHES
} from 'redux/actions/CONSTANTS';

const initialState = {
    
};

export const launchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SPACEX_LAUNCHES:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
