import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import MyPetsContainer from '../MyPets';
import Nav from '../Nav';
import CatsListContainer from '../CatsList';
import DogsListContainer from '../DogsList';

const App = ({
  myPets,
}) => (
  <div>
    <header>
      <Nav />
    </header>

    <main>
      <Route path="/cats" component={CatsListContainer} />
      <Route path="/dogs" component={DogsListContainer} />
    </main>

    {
      !myPets.length ? null : (
        <aside>
          <MyPetsContainer />
        </aside>
      )
    }
  </div>
);

App.propTypes = {
  myPets: PropTypes.array.isRequired,
};

export default App;
