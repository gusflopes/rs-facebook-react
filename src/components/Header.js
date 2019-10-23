import React from 'react';
import './Header.css';

import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <span><img src={logo} className="logo"></img></span>
      <span>Meu perfil</span>
    </header>
  )
}

export default Header;