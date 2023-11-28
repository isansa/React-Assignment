import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const Admin = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [position, setPosition] = useState('');
  console.log(name, lastname, position);


  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "http://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    getData();
  }, []);

    const createData = async (name, lastname, position) => {
      const response = await axios.post(
        "http://jsd5-mock-backend.onrender.com/members",
        {
          id: uuidv4(),
          name: name,
          lastname: lastname,
          position: position,
        }
      );
      if (response.status === 200) {
        console.log("ok")
        setName('')
        setLastname('')
        setPosition('')
      }
    };

    const DeleteData = async (id) => {
      const response = await axios.delete(
        `http://jsd5-mock-backend.onrender.com/member/${id}`
      );
      if (response.status === 200 && response.data) {
        console.log("delete")
      }
    }

  return (
    <>
      <Navbar />

      <div className="header">
        <h1>Generation Thailand <br /> 
          Home - Admin Secter
        </h1>
      </div>

      <Link to = "/user">
        <button>User Home Secter</button>
      </Link>
      <Link to = "/admin"> 
        <button>Admin Home Secter</button>
      </Link>

      <div className="input">
        <h2>Create User here</h2>
        <div>
          <input className='input__data'
            type="text"
            placeholder='Name'
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input className='input__data'
            type="text"
            placeholder='Lastname'
            value={lastname}
            onChange={(ev) => setLastname(ev.target.value)}
          />
          <input className='input__data'
            type="text"
            placeholder='Position'
            value={position}
            onChange={(ev) => setPosition(ev.target.value)}
          />
        </div>
        <button className='btn__admin' onClick={() => createData(name, lastname, position)}>
          Save
        </button>
      </div>


      <div className='data__table'>
        <table>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
          {members.map((member) => {
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.lastname}</td>
              <td>{member.position}</td>
              <td>
                <button onClick={() => DeleteData(member.id)}>Delete</button>
              </td>
            </tr>
          })}
        </table>
      </div>
    </>
  )
}

export default Admin