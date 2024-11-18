import React from 'react'
import './Header.css'
import { useNavigate, Link } from 'react-router-dom'

function Header() {

  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/login')
  }

  return (
    <div className='header'>
      <Link to="/">
        <img 
            className="nav__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
            alt="Netflix Logo"
        />
      </Link>

        <div className='header-btn'>
            <select>
                <option>English</option>
                <option>Hindi</option>
            </select>
            <button className="btn btn-danger" onClick={clickHandler}>Sign In</button>
        </div>
    </div>
  )
}

export default Header