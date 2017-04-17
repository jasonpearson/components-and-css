import React, {Component} from 'react';
import {
  DogsList,
  Dog
} from '../../components';

class DogsContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      cats: [
        {
          name: 'Truman',
          age: 12
        },
        {
          name: 'Bubba',
          age: 15
        }
      ]
    };
  }

  render () {
    return (
      <div>
        <DogsList />
      </div>
    );
  }
}

export default DogsContainer;
