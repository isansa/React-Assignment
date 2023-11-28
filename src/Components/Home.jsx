import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className = "header">
        <h1>Generation Thailand <br /> 
        React Assertment</h1>

        <Link to = "/user">
          <button>User Home Secter</button>
        </Link>

        <Link to = "/admin"> 
          <button>Admin Home Secter</button>
        </Link>
      </div>
    </>
  );
};

export default Home;