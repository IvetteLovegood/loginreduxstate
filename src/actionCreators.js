import axios from 'axios';
const url_base = "http://localhost:3000/";
const api_login = "auth/login/";

const logIn = (user) => {
    return dispatch => {
        return axios.post(url_base+api_login, user)
            .then(response => {
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