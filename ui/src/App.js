import React from 'react';
import './App.css';
import {NavBar} from './NavBar/NavBar';
import MainPage from './MainPage/MainPage';


export class App extends React.Component {



render()
  {
    return (
      
      <div  className="App">
        <NavBar/>
        <MainPage/>
      </div>
    );
  }
}
