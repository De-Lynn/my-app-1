import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import { compose } from 'redux';
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <BrowserRouter>
        <div className='appWrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='appWrapperContent'>
            <Routes>
              <Route path='/profile/:userId' element={<ProfileContainer />}/>
              <Route path='/profile' element={<ProfileContainer />}/>
              <Route path='/dialogs/*' element={<DialogsContainer />}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/settings' element={<Settings/>}/>
              <Route path='/users' element={<UsersContainer />}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component 
            {...props} 
            router={{location, navigate, params}} 
          />
      );
  }

  return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  // withRouter,
  connect(mapStateToProps, {initializeApp}),
)(App);