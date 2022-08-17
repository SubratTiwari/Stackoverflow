// import React from 'react';
import './App.css';
import Header from "./components/Header";
import{
  BrowserRouter as Router,Switch,Route,
} from 'react-router-dom'

import StackOverflow from './components/Stackoverflow'

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path='/' component ={StackOverflow}/>
        </Switch>
      </Router>
      
      {/* <index/>  */}
    </div>
  );
}

export default App;
