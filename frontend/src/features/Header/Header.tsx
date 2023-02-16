import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.scss';

function Header(): JSX.Element {
  return (
    <>
      <div className="nav__container">
        <div className="nav__logo">
          <NavLink to="/">
            <img src="./teddy.jpg" alt="" />
          </NavLink>
        </div>
        <ul className="nav__list">
          <li>
            <NavLink className="nav__list-item" to="/animals">
              My Animals
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/add-form">
              Add animal
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/authorization">
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/registration">
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink className="nav__list-item" to="/logout">
              LogOut
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
