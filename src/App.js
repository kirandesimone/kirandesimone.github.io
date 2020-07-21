import React from 'react';
import './App.css';
import Navbar  from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Experience  from './Components/Experience';
import Home  from './Components/Home';
import Project from './Components/Project';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/experience" component={Experience}></Route>
            <Route exact path="/projects" component={Project}></Route>
          </Switch>
        </div>
     </Router>
    </div>
  );
}

export default App;
