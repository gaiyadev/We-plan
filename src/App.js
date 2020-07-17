import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectSummary from './components/Project/ProjectDetails';
import SIgnIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import CreateProject from './components/Project/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Dashboard}></ Route>
          <Route path='/project/:id' exact component={ProjectSummary}></ Route>
          <Route path='/signin' exact component={SIgnIn}></ Route>
          <Route path='/signup' exact component={SignUp}></ Route>
          <Route path='/create' exact component={CreateProject}></ Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
