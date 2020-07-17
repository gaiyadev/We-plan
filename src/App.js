import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectSummary from './components/Project/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard}></ Route>
          <Route path='/project/:id' exact component={ProjectSummary}></ Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
