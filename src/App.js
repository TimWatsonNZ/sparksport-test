import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

const testApi = () => axios.get('/ping');

function App() {
  const [testResult, setTestResult] = useState('');

  useEffect(() => {
    testApi().then(result => setTestResult(result.data));
  }, []);

  return (
    <div className="App">
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
