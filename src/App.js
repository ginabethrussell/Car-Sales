import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'
import Car from './components/Car';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/car/:id' component={Car} />
    </Router>
  );
};

export default App;
