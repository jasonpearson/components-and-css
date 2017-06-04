import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import MyPetsContainer from '../MyPets';
import Nav from '../Nav';
import CatsContainer from '../Cats';
import DogsContainer from '../Dogs';

const App = ({
  myPets,
}) => (
  <div>
    <header>
      <Nav />
    </header>

    <main>
      <Route path="/cats" component={CatsContainer} />
      <Route path="/dogs" component={DogsContainer} />
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
