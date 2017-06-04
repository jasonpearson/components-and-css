import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image } from '../Dogs';

const removePet = (pet, props) => (
  pet.type === 'cat' ? props.removeCat(pet) : props.removeDog(pet)
);

const StyledUl = styled.ul`
  display: flex;
  padding: 10px;
  list-style: none;
  background-color: var(--fg);

  li {
    width: 75px;
    margin-right: 5px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  a {
    display: block;
    text-align: center;
    font-size: 1.4rem;
    color: var(--bg);
    cursor: pointer;
  }
`;

const MyPets = props => (
  <section>
    <h1>My Pets</h1>
    <StyledUl>
      {
        props.myPets.map((pet, i) => (
          <li key={i}>
            <Image size={75}>
              <img src={pet.imageUrl} />
              <h3>{pet.name}</h3>
            </Image>
            <a role="button" onClick={() => removePet(pet, props)}>remove</a>
          </li>
        ))
      }
    </StyledUl>
  </section>
);

MyPets.propTypes = {
  myPets: PropTypes.array.isRequired,
};

export default MyPets;
