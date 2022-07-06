import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;