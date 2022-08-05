import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile} from '../../redux/profile-reducer'
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
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
})(withRouter(ProfileAPIContainer));

export default ProfileContainer;