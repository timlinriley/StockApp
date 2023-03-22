import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
        <Link to="/">
            <div>Home</div>
        </Link>
        <Link to="/Dashboard">
            <div>Stocks</div>
        </Link>
        <Link  to="/About">
            <div>About</div>
        </Link>
    </div>
  )
}

export default Nav