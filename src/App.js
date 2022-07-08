import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import classes from './App.module.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.appWrapper}>
        <Header />
        <Navbar />
        <div className={classes.appWrapperContent}>
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/dialogs' element={<Dialogs/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
