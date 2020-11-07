
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/details/:id" children={<DetailsPage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
