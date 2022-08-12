import { profileAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {message: 'Hi, how are you?', likesCount: 0},
        {message: 'It is my first post!', likesCount: 23}
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => 
    ({type: SET_USER_PROFILE, profile: profile});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;