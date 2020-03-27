import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div className="introduction">
            <h1>Welcome to Lambda Eats!</h1>
            <h3>We hope you find something tasty to eat!</h3>
            <Link to = "/pizza"><button>Get Started</button></Link>
        </div>
        )
    
}

export default Home;