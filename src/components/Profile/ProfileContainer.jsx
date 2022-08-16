import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {setUserProfile, getProfile, getStatus, updateStatus} from '../../redux/profile-reducer'
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 25071;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
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

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer);