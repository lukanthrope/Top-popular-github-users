import axios from 'axios';

export function LOAD() {
    return(dispatch) => {
        return axios.get("https://api.github.com/search/users?q=location:Khmelnytskyi")
            ,then((response) => {
                dispatch(console.log(response));
            })
        }
}