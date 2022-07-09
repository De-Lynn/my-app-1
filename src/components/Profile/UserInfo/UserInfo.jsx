import classes from './UserInfo.module.css';

const UserInfo = () => {
    return (
        <div className={classes.userInfo}>
            <div className={classes.header}>User info</div>
            <img className={classes.avatar} alt='' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
            <div className={classes.description}>
                <div>Name:</div>
                <div>Age:</div>
                <div>Status:</div>
            </div>
        </div>
    );
}

export default UserInfo;