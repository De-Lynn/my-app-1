//import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Messages/Message';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog name='Ernest' id='1' src='https://sun1-17.userapi.com/s/v1/if1/4Id5XZch8ZdskIFtKaTXxcYr_favtDQe2hqd43piOkUwNs0bt358Zz0tQJ23PgLba7IpZ99-.jpg?size=50x50&quality=96&crop=60,2,473,473&ava=1'/>
                <Dialog name='Anya' id='2' src='https://sun1-26.userapi.com/s/v1/if1/bSusmtGg4Q0NWzyFcvkktaMf5o2DVdsKvpm5HsJtS9HDF0Z_jfFM5buT9uaS4NbF5iPuMq_U.jpg?size=50x50&quality=96&crop=96,96,766,766&ava=1'/>
                <Dialog name='Favorites' id='3' src='https://vk.com/images/icons/im_favorites_100.png'/>
                <Dialog name='University group' id='4' src='https://sun1-18.userapi.com/s/v1/if1/Mdia_DRn0KzV80xPypGFp5PeKhlcYXy22F7yrKqBzxFODh1zQcVOXVkpHt2KzEDeZcvHrEYq.jpg?size=50x0&quality=96&crop=0,0,1000,1000&ava=1'/>
            </div>
            <div className={classes.messages}>
                <Message text='Hi!' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
                <Message text='How are you?' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
                <Message text='I`m learning React.' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
            </div>
        </div>
    );
}

export default Dialogs;