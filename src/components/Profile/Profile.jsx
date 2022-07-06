import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.banner} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div>
            <div className={classes.userInfo}>
                <div className={classes.header}>User info</div>
                <img className={classes.avatar} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
                <div className={classes.description}>
                    <div>Name:</div>
                    <div>Age:</div>
                    <div>Status:</div>
                </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;