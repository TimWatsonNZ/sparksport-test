import { useEffect, useState } from "react";
import { Button } from 'semantic-ui-react';
import logo from './logo.svg';
import './style/App.css';

const movieService = require('./services/movieService');

function App() {
  const [testResult, setTestResult] = useState('');

  useEffect(() => {
    movieService.search('godzilla')
      .then(result => setTestResult(JSON.stringify(result.data, null, 2)));
  }, []);

  return (
    <div className="App">
      <Button>Click Here!</Button>
      <span>{testResult}</span>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
