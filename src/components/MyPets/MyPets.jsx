import React from 'react';
import PropTypes from 'prop-types';

const removePet = (pet, props) => (
  pet.type === 'cat' ? props.removeCat(pet) : props.removeDog(pet)
);

const MyPets = props => (
  <section>
    <h1>My Pets</h1>
    <ul>
      {
        props.myPets.map((pet, i) => (
          <li key={i}>
            {pet.name}
            <button onClick={() => removePet(pet, props)}>remove</button>
          </li>
        ))
      }
    </ul>
  </section>
);

MyPets.propTypes = {
  myPets: PropTypes.array.isRequired,
};

export default MyPets;
