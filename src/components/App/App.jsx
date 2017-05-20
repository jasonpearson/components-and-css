import React from 'react';
import { Route } from 'react-router-dom';
import MyPetsContainer from '../MyPets';
import Nav from '../Nav';
import CatsListContainer from '../CatsList';
import DogsListContainer from '../DogsList';

const App = () => (
  <div>
    <Nav />
    <main>
      <Route path="/cats" component={CatsListContainer} />
      <Route path="/dogs" component={DogsListContainer} />
      <MyPetsContainer />
    </main>
  </div>
);

App.propTypes = {};

export default App;
