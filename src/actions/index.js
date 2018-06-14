const API_KEY = '1e2e5cb72d554093af2d6e057fe9b057';
const ROOT_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}&q=singapore?page=0`;


export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

function fetchPostsRequest(){
    return {
        type: "FETCH_REQUEST"
    }
}

function fetchPostsSuccess(payload) {
    return {
        type: "FETCH_SUCCESS",
        payload
    }
}
//Handling Error
function fetchPostsError() {
    return {
        type: "FETCH_ERROR"
    }
}
//Main function to fetch posts
export function fetchPostsWithRedux() {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPosts().then(([response, json]) =>{
            if(response.status === 200){
                dispatch(fetchPostsSuccess(json));
            }
            else{
                dispatch(fetchPostsError())
            }
        })
    }
}

function fetchPosts() {
    return fetch(ROOT_URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}
