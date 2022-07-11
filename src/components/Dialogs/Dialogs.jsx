import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Messages/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((dialog) => (<Dialog name={dialog.name} id={dialog.id} src={dialog.src}/>)) 
    let messagesElements = props.messages.map((message) => <Message text={message.text} src={message.src}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;