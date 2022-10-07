import React, { useState } from 'react';
import LoginForm from './LoginForm';
// import NavBar from './NavBar';
import Home from './Home';
import Blog from './Blog';
// import Events from './Events';


function App() {
  
  return (
    <div className='App'>
      {/* <NavBar/> */}
      <Home/>
      {/* <Events/> */}
      <Blog/>
      <LoginForm />
     </div>
  )}


export default App;
