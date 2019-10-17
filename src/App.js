import React from 'react';
import hangman from './images/hangman.png'
import './App.css';
import NavBar from './components/NavBar';
import SignUpContainer from './containers/SignUpContainer';
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
          <Route exact path="/signup" component={SignUpContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
