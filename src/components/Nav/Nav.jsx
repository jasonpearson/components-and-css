import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/cats">View Cats</Link>
      </li>
      <li>
        <Link to="/dogs">View Dogs</Link>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {};

export default Nav;
