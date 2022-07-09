import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.message}>
            <img src={props.src} alt="" />
            <div className={classes.text}>{props.text}</div>
        </div>
    );
}

export default Message;