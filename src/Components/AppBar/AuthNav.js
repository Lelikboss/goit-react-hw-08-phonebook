import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/login" exact="true" activestyle="nav__linkActv">
        Sign in
      </NavLink>
      <NavLink to="/register" exact="true" activestyle="nav__linkActv">
        Sign up
      </NavLink>
    </div>
  );
}
