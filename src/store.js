import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state, action) => {
    if (action.type === "LOG_IN") {
        return {
            ...state,
            response: action.response
        };
    } else if (action.type === "LOG_OUT") {
        return {
            ...state,
            response: state.response.concat(false)
        };
    }

    return state;
};

const logger = store => next => action => {
    let result = next(action)
    return result
}

export default createStore(reducer, { response: "" }, applyMiddleware(logger, thunk))