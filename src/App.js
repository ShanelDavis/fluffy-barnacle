import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const App = () =>{

  return (
    <div className="App">
       <Header></Header>
        <p>Body Here</p>
      <Footer></Footer>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
    </div>
  );
}

export default App;
