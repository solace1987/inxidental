import React from 'react';
import{Record} from "./components/recordForm"
import{Heading} from "./components/Header"
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import{IncidentTable}from "./components/incidentTable";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
//
function App() {
  return (

  <Router>
<div style={{padding:40}}>
     <Heading/>
     <Route path='/' exact component={Record}></Route>
     <Route path='/viewIncident' component={IncidentTable}></Route>
  </div>

  </Router>
  );
}

export default App;
