import { follow, setCurrentPage, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { requestUsers } from '../../redux/users-reducer';
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from '../../redux/users-selectors'
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                { this.props.isFetching
                  ? <Preloader />
                  : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    />
            </>
        );
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFetching, requestUsers,}),
    withAuthRedirect,
)(UsersAPIContainer);