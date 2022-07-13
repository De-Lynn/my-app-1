import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            {message: 'Hi, how are you?', likesCount: 0},
            {message: 'It is my first post!', likesCount: 23}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Ernest', src: 'https://sun1-17.userapi.com/s/v1/if1/4Id5XZch8ZdskIFtKaTXxcYr_favtDQe2hqd43piOkUwNs0bt358Zz0tQJ23PgLba7IpZ99-.jpg?size=50x50&quality=96&crop=60,2,473,473&ava=1'},
            {id: 2, name: 'Anya', src: 'https://sun1-26.userapi.com/s/v1/if1/bSusmtGg4Q0NWzyFcvkktaMf5o2DVdsKvpm5HsJtS9HDF0Z_jfFM5buT9uaS4NbF5iPuMq_U.jpg?size=50x50&quality=96&crop=96,96,766,766&ava=1'},
            {id: 3, name: 'Favorites', src: 'https://vk.com/images/icons/im_favorites_100.png'},
            {id: 4, name: 'University group', src: 'https://sun1-18.userapi.com/s/v1/if1/Mdia_DRn0KzV80xPypGFp5PeKhlcYXy22F7yrKqBzxFODh1zQcVOXVkpHt2KzEDeZcvHrEYq.jpg?size=50x0&quality=96&crop=0,0,1000,1000&ava=1'}
        ],
        messages: [
            {text: 'Hi!', src: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
            {text: 'How are you?', src: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'},
            {text: 'I`m learning React.', src: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'}
        ]
    },
    sideBar: {
        friendsList: [
            {id: 1, name: 'Ernest', src: 'https://sun1-17.userapi.com/s/v1/if1/4Id5XZch8ZdskIFtKaTXxcYr_favtDQe2hqd43piOkUwNs0bt358Zz0tQJ23PgLba7IpZ99-.jpg?size=50x50&quality=96&crop=60,2,473,473&ava=1'},
            {id: 2, name: 'Anya', src: 'https://sun1-26.userapi.com/s/v1/if1/bSusmtGg4Q0NWzyFcvkktaMf5o2DVdsKvpm5HsJtS9HDF0Z_jfFM5buT9uaS4NbF5iPuMq_U.jpg?size=50x50&quality=96&crop=96,96,766,766&ava=1'},
            
        ]
    }
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;