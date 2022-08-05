import Navbar from './Navbar';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friendsList: state.sideBar.friendsList
    }
}

const NavbarContainer = connect(mapStateToProps, {})(Navbar);

export default NavbarContainer;