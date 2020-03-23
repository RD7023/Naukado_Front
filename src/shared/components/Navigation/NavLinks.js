import React, {useContext } from 'react';
import {NavLink} from 'react-router-dom'

import { AuthContext } from '../../context/auth-context'
import './NavLinks.css'

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>МАТЕМАТИКА</NavLink>
    </li>
    {!auth.isLoggedIn && 
    <li>
      <NavLink to="/auth">ВХІД</NavLink>
    </li>}
    {auth.isLoggedIn && 
    <li>
      <button onClick={auth.logout}>ВИХІД</button>
    </li>}
  </ul>
}

export default NavLinks;
