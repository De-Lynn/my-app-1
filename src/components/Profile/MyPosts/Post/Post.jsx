import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar} alt='' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
            {props.message}
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    );
}

export default Post;