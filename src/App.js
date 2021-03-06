import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='appWrapper'>
        <Header />
        <NavbarContainer />
        <div className='appWrapperContent'>
          <Routes>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/dialogs/*' element={<DialogsContainer />}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/users' element={<UsersContainer />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
