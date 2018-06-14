//Initial state of application
const INITIAL_STATE = {
    posts:[],
    loaded: false
};
//Posts reducer
const PostsReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return state;
        case "FETCH_SUCCESS":
            return {...state, posts: action.payload.response.docs, loaded:true};
        default:
            return state;
    }
};

export default PostsReducer;
