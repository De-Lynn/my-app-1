import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img alt='' src='https://image.similarpng.com/very-thumbnail/2020/09/Sun-logo-on-transparent-background-PNG.png' />
            <div className={classes.loginBlock}>
                { props.isAuth 
                  ? <span> <img src="" alt="" /> { props.login } </span>
                  : <NavLink to='/login'>Login</NavLink>
                }
                
            </div>
        </header>
    );
}

export default Header;