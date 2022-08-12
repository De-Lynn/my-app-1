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

const App = (props) => {
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

export default App;
