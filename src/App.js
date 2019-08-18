import React from 'react';
import{Record} from "./components/recordForm"
import{Heading} from "./components/Header"
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {Divider} from 'semantic-ui-react';
//import{IncidentTable}from "./components/incidentTable"
//
function App() {
  return (
<div style={{padding:40}}>
  <Heading/>
  <Record/>
  <Divider />
  
</div>

    
  );
}

export default App;
