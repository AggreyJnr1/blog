import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import home from './pages/home';

//<Route exact path="/" component={home}/>


function App() {
  return (
    <div className="App">                               
   <Router>
      <Switch>
      <Route exact path="/" component={home}/>
      </Switch>
   </Router>
    </div>
  );
}

export default App;
