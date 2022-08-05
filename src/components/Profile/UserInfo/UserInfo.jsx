import Preloader from '../../common/Preloader/Preloader';
import classes from './UserInfo.module.css';

const UserInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.userInfo}>
            <div className={classes.photo}>
                {/* <img className={classes.avatar} alt='' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' /> */}
                <img className={classes.avatar} src={props.profile.photos.large} alt="" />
            </div>
            <div className={classes.aboutMe}>
                <div className={classes.fullName}>{props.profile.fullName}</div>
                <div className={classes.splitLine}></div>
                <div className={classes.description}>
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>Looking for a job:</div>
                        <div>{props.profile.lookingForAJob === true ? `Yes` : `No`}</div>
                    </div>
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>More about job search:</div>
                        <div>{props.profile.lookingForAJobDescription}</div>
                    </div>
                    <div className={classes.splitBlock}>
                        <div>Contacts: </div>
                        <div className={classes.descriptionSplitLine}></div>
                    </div>
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>GitHub:</div>
                        <div>{props.profile.contacts.github != null
                                ? <a href={props.profile.contacts.github}>{props.profile.contacts.github}</a> 
                                : `Unknown`}
                        </div>
                    </div>
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>VK:</div>
                        <div>{props.profile.contacts.vk != null
                            ? <a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a> 
                            : `Unknown`}
                        </div>
                    </div>
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>Facebook:</div>
                        <div>{props.profile.contacts.facebook != null
                                ? props.profile.contacts.facebook : `Unknown`}
                        </div>
                         
                    </div>
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>Instagram:</div>
                        <div>{props.profile.contacts.instagram!= null
                                ? props.profile.contacts.instagram : `Unknown`}
                        </div>
                         
                    </div>  
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>Twitter:</div>
                        <div>{props.profile.contacts.twitter!= null
                                ? props.profile.contacts.twitter : `Unknown`}
                        </div>
                         
                    </div> 
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>Website:</div>
                        <div>{props.profile.contacts.website!= null
                                ? props.profile.contacts.website : `Unknown`}
                        </div>
                         
                    </div> 
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>YouTube:</div>
                        <div>{props.profile.contacts.youtube!= null
                                ? props.profile.contacts.youtube : `Unknown`}
                        </div>
                         
                    </div>   
                    <div className={classes.descriptionItem}>
                        <div className={classes.property}>Main Link:</div>
                        <div>{props.profile.contacts.mainLink!= null
                                ? props.profile.contacts.mainLink : `Unknown`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;