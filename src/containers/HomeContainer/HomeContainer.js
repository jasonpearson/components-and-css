import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class HomeContainer extends Component {
  render () {
    return (
      <div>
        <h1>Animals</h1>
        <Link to="/cats">Cats</Link>
        <Link to="/dogs">Dogs</Link>
      </div>
    );
  }
}

export default HomeContainer;
