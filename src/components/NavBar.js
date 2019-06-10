import React from 'react';
import { NavLink } from 'react-router-dom';

const navBarStyle = {
  background: 'green',
}

const linkStyle = {
  color: "yellow",
  textDecoration: 'none',
  padding: '10px'
}

const NavBar = () => {
  return (
    <div className="navbar" style={navBarStyle}>
      <NavLink style={linkStyle} activeStyle={{background: 'purple'}} to='/' exact >Home</NavLink>
      <NavLink style={linkStyle} activeStyle={{background: 'purple'}} to='/actors' exact>Actors</NavLink>
      <NavLink style={linkStyle} activeStyle={{background: 'purple'}} to='/directors'>Directors</NavLink>
      <NavLink style={linkStyle} activeStyle={{background: 'purple'}} to='/movies'>Movies</NavLink>
    </div>
  );
};

export default NavBar;
