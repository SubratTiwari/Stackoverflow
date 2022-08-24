// import React from 'react';
import './App.css';
import Header from "./components/Header";
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'

import Question from './components/Add Question/Question';
import StackOverflow from './components/Stackoverflow'
import ViewQuestion from "./components/ViewQuestion";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { Component, useEffect } from 'react';
import { auth } from './firebase';
import { Redirect } from 'react-router-dom';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

const PrivateRoute=({component:Component, ...rest}) => (
  <Route {...rest} render ={(props) => user ? (<Component {...props}/>) :(
    <Redirect to ={{
      pathname:'/auth',
      state:{
        from: props.location,
      }
    }}/>
  
  )
}
/>);




  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path={user ? '/' : '/auth' }component={user ? StackOverflow :Auth} />
          <Route exact path="/Add-Question" component={Question} />
          <Route exact path="/question" component={ViewQuestion} />
          {/* <Route exact path='/' component={StackOverflow} /> */}

        </Switch>
      </Router>

      {/* <index/>  */}
    </div>
  );
}

export default App;
