import axios from 'axios';

const logIn = (user) => {

    console.log("responsejson", user.password);
    return dispatch => {
        return axios.post('http://localhost:3001/auth/login/', user)
            .then(response => {
                console.log(response);
                dispatch({
                    type: "LOG_IN",
                    response: response.data
                })
            })
            .catch(function(error) {
                console.log(error);
            });
    };
}

export { logIn };