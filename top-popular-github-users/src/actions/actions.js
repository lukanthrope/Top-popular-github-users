import axios from 'axios';

export const LOAD = () => dispatch => {
    return axios.get("https://api.github.com/search/users?q=location:Khmelnytskyi")
        .then((response) => {
        console.log(response);
        dispatch({
            type: 'LOAD',
            items: response
        });
    })
}