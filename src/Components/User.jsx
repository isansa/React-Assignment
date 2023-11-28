import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';


const User = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "http://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="header">
        <h1>Generation Thailand <br /> 
          Home - User Secter
        </h1>
      </div>

      <Link to = "/user">
        <button>User Home Secter</button>
      </Link>
      <Link to = "/admin"> 
        <button>Admin Home Secter</button>
      </Link>

      <div className='data__table'>
        <table>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        
            {members.map((member) => {
              <tr>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
              </tr>
            })}
        </table>
      </div>
    </>
  );
};

export default User