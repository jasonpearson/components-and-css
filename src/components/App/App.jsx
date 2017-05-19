import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import CatsListContainer from '../CatsList';
import DogsListContainer from '../DogsList';


const App = () => (
  <div>
    <section>
      <h1>My Pets</h1>
      <ul>
        {/* {
          props.myPets.map((pet, i) => (
            <li key={i}>
              {pet.name}
              <button onClick={() => props.removePet(pet)}>remove</button>
            </li>
          ))
        }*/}
      </ul>
    </section>

    <section>
      <h1>Find Pets to Adopt</h1>
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

      <Route path="/cats" component={CatsListContainer} />
      <Route path="/dogs" component={DogsListContainer} />
    </section>
  </div>
);

App.propTypes = {
  // myPets: PropTypes.array.isRequired,
  // removePet: PropTypes.func.isRequired,
};

export default App;
