import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Animals</h1>
    <Link to="/cats">Cats</Link>
    <Link to="/dogs">Dogs</Link>
  </div>
);

export { Home };
