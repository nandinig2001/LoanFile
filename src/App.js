import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Upload from './components/upload';
import ApplyLoan from './components/ApplyLoan';
import Verification from './components/Verification';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Upload} />
          <Route path='/demo' exact component={ApplyLoan} />
          <Route path='/disloan' exact component={Verification} />
          <Route path='/home' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}
export default App