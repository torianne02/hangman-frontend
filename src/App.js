import React from 'react';
import hangman from './images/hangman.png'
import './App.css';
import NavBar from './components/NavBar';
import LogInContainer from './containers/LogInContainer';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/login" component={LogInContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
