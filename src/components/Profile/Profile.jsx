import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
    return (
        <div className={classes.contentArea}>
            {/* <div className={classes.banner}>
                <img className={classes.banner} alt='' src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div> */}
            <UserInfo className={classes.userInfo} profile={props.profile}/>
            <MyPostsContainer className={classes.posts} />
        </div>
    );
}

export default Profile;