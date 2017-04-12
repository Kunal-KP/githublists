import axios from 'axios';
export const starredRepo = () => {
    console.log("Inside action index.js");
    return axios.get("https://api.github.com/search/repositories?q=stars:>=500&sort=stars&order=desc")
        .then(function(response){
            console.log("Tot count in action index.js"+response.data.items);
            return {
                   type: 'TOTAL_STARRED_REDUCER',
                   payload: response.data.items
            }
    });

};
