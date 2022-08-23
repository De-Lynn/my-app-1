import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData, getAuthUserData, logout} from '../../redux/auth-reducer';

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

const HeaderContainer = connect(mapStateToProps, {
    setAuthUserData, 
    getAuthUserData,
    logout,
    })(HeaderAPIContainer);

export default HeaderContainer;