import Navbar from './Navbar';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friendsList: state.sideBar.friendsList
    }
}

let mapDispatchToProps = () => {
    return {
        
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;