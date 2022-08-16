import { sendMessage, updateNewMessageText} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageText,}),
    withAuthRedirect
)(Dialogs);

export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessageText,}),
    withAuthRedirect
)(Dialogs);