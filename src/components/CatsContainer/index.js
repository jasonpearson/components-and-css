import React, {Component} from 'react';
import {
  CatsList,
  Cat
} from './index';

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
export {Cat} from './Cat/Cat';
export {CatsList} from './CatsList/CatsList';