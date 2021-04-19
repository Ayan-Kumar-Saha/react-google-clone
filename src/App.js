import './App.scss';

import HomePage from './page/home/home.page';
import SearchPage from './page/search/search.page';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search-results" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
