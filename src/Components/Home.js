import React from 'react';
import { Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div className="main-container">
        <div className="welcome">
            <div className="welcome-image">
                <img src="./image 1 (1).jpg" alt=''/>
            </div>
            <div className="welcome-intro">
                <h1>Over the river<br/>and <br/>through the woods. </h1>
                <h2>Let's satisfy our adventurous nature</h2>
                <button id="welcome-btn">Explore</button>
            </div>
        </div>
    </div>
  )
}

export default Home;