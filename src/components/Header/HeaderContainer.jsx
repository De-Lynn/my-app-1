import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reducer'
import { authAPI } from '../../api/api';

class HeaderAPIContainer extends React.Component {
    componentDidMount() {
        authAPI.doLogin().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }c

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIContainer);

export default HeaderContainer;