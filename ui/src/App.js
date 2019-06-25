import React from 'react';
import './App.css';
import {NavBar} from './NavBar/NavBar';
import {MainPage} from './MainPage/MainPage';

const App = () => {

    return (
      <div  className="App">
        <NavBar/>
        <MainPage/>
      </div>
    );
  }


export default App;
