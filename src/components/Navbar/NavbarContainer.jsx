import Navbar from './Navbar';
import {connect} from 'react-redux';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        friendsList: state.sideBar.friendsList
    }
}

export default compose(
    connect(mapStateToProps, {}),
)(Navbar);