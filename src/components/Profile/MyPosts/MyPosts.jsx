import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <div className={classes.newPost}>
                <div className={classes.header}>New post</div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.allPosts}>
                <div className={classes.header}>All posts</div>
                <Post message='Hi, how are you?' likesCount=' 0'/>
                <Post message='It is my first post!' likesCount=' 23'/>
            </div>
        </div>
    );
}

export default MyPosts;