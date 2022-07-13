import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {

    let friends = props.state.friendsList.map((friend) => (
        <div className={classes.friend}>
            <img src={friend.src} alt=''></img>
            <div>{friend.name}</div>
        </div>
        )   
    )

    return (
        <div className={classes.layout}>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/dialogs'>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/music'>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to='/settings'>Settings</NavLink>
                </div>
            </nav>
            <div className={classes.line}></div>
            <div className={classes.friendList}>
                <div className={classes.header}>Friends</div>
                <div className={classes.friends}>{ friends }</div>
            </div>
        </div>
        
    );
}

export default Navbar;