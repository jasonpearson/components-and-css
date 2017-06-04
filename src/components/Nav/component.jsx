/* eslint no-undef: 0 */
/* eslint react/no-children-prop: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const themes = [
  { fg: '#509891', bg: '#58413E' },
  { fg: '#F6EC9E', bg: '#4C725F' },
  { fg: '#EF9B5F', bg: '#A63669' },
];

let lastRandom;
let randomNum;

const changeTheme = () => {
  const rootEl = document.querySelector(':root');

  do {
    randomNum = Math.floor(Math.random() * themes.length);
  } while (randomNum === lastRandom);

  const randomTheme = themes[randomNum];
  lastRandom = randomNum;

  rootEl.style.setProperty('--bg', randomTheme.fg);
  rootEl.style.setProperty('--fg', randomTheme.bg);
};

const Nav = ({ className }) => (
  <nav className={className}>
    <ul>
      <li>View: </li>
      <li>
        <Link to="/cats">Cats</Link>
      </li>
      <li>
        <Link to="/dogs">Dogs</Link>
      </li>
    </ul>

    <Route
      to="/"
      children={({ match }) => (
        match.isExact ? null : <div className="party" role="button" onClick={changeTheme}>🎉</div>
      )}
    />
  </nav>
);

Nav.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;

  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
  }

  li {
    margin-right: 1rem;
  }

  .party {
    padding-right: 10px;
    cursor: pointer;
  }
`;

export default StyledNav;
