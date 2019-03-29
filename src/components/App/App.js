import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeContainer from '../Home/HomeContainer';
import MovieContainer from '../Movie/MovieContainer';

const App = () => (
  <Router>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/movie/:id" component={MovieContainer} />
      </div>
    </div>
  </Router>
);

export default App;




