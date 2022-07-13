import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div>
            <div className={classes.message}>
                <img src={props.src} alt="" />
                <div className={classes.text}>{props.text}</div>
            </div>
        </div>
        
    );
}

export default Message;