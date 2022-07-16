import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Messages/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => (<Dialog name={dialog.name} id={dialog.id} src={dialog.src}/>)) 
    let messagesElements = props.state.messages.map((message) => <Message text={message.text} src={message.src}/>)

    let SendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onMessageUpdate = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
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
                          value={props.state.newMessageText} />
                <button onClick={SendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;