import axios from 'axios';

export const LOAD = (city = 'Khmelnytskyi') => dispatch => {

    return axios.get(`https://api.github.com/search/users?q=location:${city}+sort:followers`)
        .then((response) => {
            const users10 = response.data.items.slice(0, 10);
            dispatch({
                type: 'LOAD',
                users: users10
            });
            
            users10.forEach(user => {
                axios.get(`https://api.github.com/users/${user.login}/repos`)
                    .then((response) => {
                        const repos = response.data;
                        
                        let sumOfStars = repos.reduce((el, prev) => {
                            
                            if (prev.stargazers_count) {
                                return prev.stargazers_count + el;
                            } else {
                                return el;
                            }
                        }, 0);

                        dispatch({
                            type: 'SUM_OF_STARS',
                            payload: {
                                userId: user.id, 
                                sumOfStars
                            }, 
                        });
                    });
            });
        })
        .catch((error) => {
            dispatch({
                type: 'ERROR'
            })
        });
}