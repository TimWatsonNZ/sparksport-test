import { useRoutes } from 'hookrouter';

import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';

const routes = {
  '/': () => <SearchPage />,
  '/details': () => <DetailsPage />
}

function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      {routeResult}
    </div>
  );
}

export default App;
