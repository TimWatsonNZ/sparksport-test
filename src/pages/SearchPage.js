import { useEffect, useState } from "react";
import { Search } from 'semantic-ui-react'

const movieService = require('../services/movieService');

function App() {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [testResult, setTestResult] = useState([]);

  useEffect(() => {
    movieService.search('godzilla')
      .then(result => setTestResult(result.results.slice(0, 10)));
  }, [searchTerm]);

  return (
    <div className="App">
      <Search placeholder="Search for a movie"
        onSearchChange={(event, value) => {
          setSearchTerm(value.result)
        }}
        // resultRenderer={resultRenderer}
        results={testResult}
        value={searchTerm}
      ></Search>
      
    </div>
  );
}

export default App;
