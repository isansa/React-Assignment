import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>
        <ul>
          <li className='link__main'><Link to="/">Home</Link></li>
          <li className='link__main'><Link to="/owner">Owner</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar