import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/formsControls';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css';
import Message from './Messages/Message';

const SendMessageForm = (props) => {
    return (
        <form className={classes.sendMessage} onSubmit={props.handleSubmit}>
            <Field name='newMessage' className={classes.textarea} 
                placeholder='Write a message...' component={Textarea}
                validate={[requiredField, maxLengthCreator(100)]}/>
            <button>Send</button>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({
    form: 'send-message'
})(SendMessageForm)

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((dialog) => <Dialog key={dialog.id} name={dialog.name} id={dialog.id} src={dialog.src}/>) 
    let messagesElements = props.messages.map((message) => <Message key={message.id} text={message.text} src={message.src}/>)

    const sendMessage = (formData) => {
        props.sendMessage(formData.newMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        <SendMessageReduxForm {...props} onSubmit={sendMessage}/>
        </div>
    );
}

export default Dialogs;