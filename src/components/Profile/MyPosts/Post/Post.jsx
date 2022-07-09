import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar} alt='' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
            <div className={classes.message}>{props.message}</div>
            <div className={classes.functions}>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    );
}

export default Post;