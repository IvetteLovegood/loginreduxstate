import { createStore } from 'redux';

const reducer = (state, action) => {
    if (action.type === "LOG_IN") {
        return {
        	...state,
            user: state.user.concat(true)
        };

    } 
        else if (action.type === "LOG_OUT") {
    	   return {
    		  ...state,
    		  user: state.user.concat(false)
    	   };
    }

    return state;
};

export default createStore(reducer, {user:" "})