import { createStore, applyMiddleware } from 'redux';

const reducer = (state, action) => {
    if (action.type === "LOG_IN") {
        return {
        	...state,
            user: state.user.concat(true)
        };

    } else if (action.type === "LOG_OUT") {
    	return {
    		...state,
    		user: state.user.concat(false)
    	}
    }

    return state;
};

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(reducer, {user:""}, applyMiddleware(logger))