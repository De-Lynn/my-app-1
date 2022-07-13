import { useRef } from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = useRef();

    let AddPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={classes.posts}>
            <div className={classes.newPost}>
                <div className={classes.header}>New post</div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ AddPost }>Add post</button>
                </div>
            </div>
            <div className={classes.allPosts}>
                <div className={classes.header}>All posts</div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;