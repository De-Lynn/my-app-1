import classes from './Users.module.css';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, name: 'Ernest Keler', 
                        src: 'https://sun1-17.userapi.com/s/v1/if1/4Id5XZch8ZdskIFtKaTXxcYr_favtDQe2hqd43piOkUwNs0bt358Zz0tQJ23PgLba7IpZ99-.jpg?size=50x50&quality=96&crop=60,2,473,473&ava=1', 
                        status: 'Marshmallow :3',
                        location: {
                            city: 'Moscow',
                            country: 'Russia'
                        },
                        followed: false
                },
                {id: 2, name: 'Anya Godunova', 
                        src: 'https://sun1-26.userapi.com/s/v1/if1/bSusmtGg4Q0NWzyFcvkktaMf5o2DVdsKvpm5HsJtS9HDF0Z_jfFM5buT9uaS4NbF5iPuMq_U.jpg?size=50x50&quality=96&crop=96,96,766,766&ava=1', 
                        status: 'Ledy Bug',
                        location: {
                            city: 'Shatura',
                            country: 'Russia'
                        },
                        followed: true
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(user => 
                    <div key={user.id}>
                        <span>
                            <div>
                                <img className={classes.avatar} src={user.src} alt="" />
                            </div>
                            <div>
                                {user.followed 
                                ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                                
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
            )}
        </div>
    );
}

export default Users;