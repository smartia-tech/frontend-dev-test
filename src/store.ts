import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { watchers } from "./sagas";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const enhancers: any = [];
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(watchers);

export default store;