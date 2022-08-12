import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile, getProfile} from '../../redux/profile-reducer'
import {useParams, useLocation, useNavigate, Navigate} from 'react-router-dom';

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render () {
        if (!this.props.isAuth) return <Navigate to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

function withRouter(Component) {
    function WithUrlDataContainerComponent(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{location, navigate, params}} />
        );
    }

    return WithUrlDataContainerComponent;
}

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile,
    getProfile,
})(withRouter(ProfileAPIContainer));

export default ProfileContainer;