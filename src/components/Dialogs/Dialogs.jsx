import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Messages/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((dialog) => <Dialog key={dialog.id} name={dialog.name} id={dialog.id} src={dialog.src}/>) 
    let messagesElements = props.messages.map((message) => <Message key={message.id} text={message.text} src={message.src}/>)

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageUpdate = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.sendMessage}>
                <textarea placeholder='Write a message...'
                          onChange={onMessageUpdate}
                          value={props.newMessageText} />
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;