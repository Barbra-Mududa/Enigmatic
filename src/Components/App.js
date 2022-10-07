import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";

import LoginForm from './LoginForm';
import NavBar from './NavBar';
import Home from './Home';
import Blog from './Blog';
import Events from './Events';


function App() {
  const [web, setWeb] = useState("/")
  
  return (
    <div className='App'>
      <NavBar onChangePage={setWeb}/>
      <Switch>
        <Route path="/blog">
            <Blog/>
        </Route>
        <Route path="/events">
            <Events/>
        </Route>
        <Route path="/loginform">
            <LoginForm />
        </Route>
        <Route exact path="/">
            <Home/>
        </Route>
      </Switch>
    </div>
  )}


export default App;
