import React, {Component} from 'react';
import {
  CatsList,
  Cat
} from '../../components';

class CatsContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      cats: [
        {
          name: 'Mochi',
          age: 7
        },
        {
          name: 'Goose',
          age: 2
        }
      ]
    };
  }

  render () {
    return (
      <div>
        <CatsList />
      </div>
    );
  }
}

export default CatsContainer;
