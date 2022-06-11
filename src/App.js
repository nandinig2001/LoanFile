import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Upload from './components/upload';
import ApplyLoan from './components/ApplyLoan';
import Verification from './components/Verification';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Upload} />
          <Route path='/demo' exact component={ApplyLoan} />
          <Route path='/disloan' exact component={Verification} />
        </Switch>
      </Router>
    </>
  );
}
export default App