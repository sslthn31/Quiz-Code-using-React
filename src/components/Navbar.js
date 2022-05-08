import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/'className='title'>
      <h3>Quiz-Code-Using-React</h3>
      </Link>
    </div>
  )
}

export default Navbar