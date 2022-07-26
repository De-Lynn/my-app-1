import axios from 'axios';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/null-avatar.png';
import React from 'react';

class Users extends React.Component {

    // [
    //     {id: 1, name: 'Ernest Keler', 
    //             src: 'https://sun1-17.userapi.com/s/v1/if1/4Id5XZch8ZdskIFtKaTXxcYr_favtDQe2hqd43piOkUwNs0bt358Zz0tQJ23PgLba7IpZ99-.jpg?size=50x50&quality=96&crop=60,2,473,473&ava=1', 
    //             status: 'Marshmallow :3',
    //             location: {
    //                 city: 'Moscow',
    //                 country: 'Russia'
    //             },
    //             followed: false
    //     },
    //     {id: 2, name: 'Anya Godunova', 
    //             src: 'https://sun1-26.userapi.com/s/v1/if1/bSusmtGg4Q0NWzyFcvkktaMf5o2DVdsKvpm5HsJtS9HDF0Z_jfFM5buT9uaS4NbF5iPuMq_U.jpg?size=50x50&quality=96&crop=96,96,766,766&ava=1', 
    //             status: 'Ledy Bug',
    //             location: {
    //                 city: 'Shatura',
    //                 country: 'Russia'
    //             },
    //             followed: true
    //     }
    // ]

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
             .then(response => {
                this.props.setUsers(response.data.items)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i<=pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(page => {
                        return (
                            <span className={this.props.currentPage === page && classes.selectedPage}
                                  onClick={ (event) => {this.onPageChanged(page)}}>{page}</span>
                        );
                    })}
                </div>
                {
                    this.props.users.map(user => 
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img className={classes.avatar} 
                                        src={ user.photos.small != null ? user.photos.small : userPhoto } alt="" />
                                </div>
                                <div>
                                    {user.followed 
                                    ? <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button>
                                    : <button onClick={() => {this.props.follow(user.id)}}>Follow</button>}
                                    
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </span>
                            </span>
                        </div>
                )}
            </div>
        );
    }
}

export default Users;