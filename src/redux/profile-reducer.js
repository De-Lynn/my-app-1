import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        {message: 'Hi, how are you?', likesCount: 0},
        {message: 'It is my first post!', likesCount: 23}
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                message: action.newPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

export const addPost = (newPost) => ({type: ADD_POST, newPost: newPost});
export const setUserProfile = (profile) => 
    ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (newStatus) =>
    ({type: SET_STATUS, status: newStatus});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}
export const updateStatus = (newStatus) => {
    return (dispatch) => {
        profileAPI.updateStatus(newStatus).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(newStatus));
            }
        });
    }
}

export default profileReducer;