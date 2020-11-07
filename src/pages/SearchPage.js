import { withRouter } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Search, Grid, Header } from 'semantic-ui-react'

const movieService = require('../services/movieService');

function App(props) {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [testResult, setTestResult] = useState([]);

  useEffect(() => {
    movieService.search(searchTerm)
      .then(result => {
        const searchResults = result?.results?.slice(0, 10);
        setTestResult(searchResults || []);
      });
  }, [searchTerm]);

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
          <Header size='huge' textAlign='center'>Little Test Landing Page</Header>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
          <Search placeholder="Search for a movie"
            onSearchChange={(event, searchChangeEvent) => {
              if (searchChangeEvent?.value) {
                setSearchTerm(searchChangeEvent?.value);
              }
              
            }}
            onResultSelect={(event, data) => {
              if (data?.result) {
                props.history.push(`/details/${data?.result?.id}`);
              }
            }}
            results={testResult}
            value={searchTerm}
            input={{ fluid: true }}
          >
          </Search>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default withRouter(App);
