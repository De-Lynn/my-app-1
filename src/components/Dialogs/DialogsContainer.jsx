import { sendMessage, updateNewMessageText} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        isAuth: state.auth.isAuth,
    }
}

const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText,
})(Dialogs);

export default DialogsContainer;