import React from 'react';
import logo from './logo.svg';
import './App.css';
import RepoCategories from "./components/RepoCategories";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <RepoCategories title={"Graphics, Charts, Diagrams, Visualizations"}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
