import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import {
  Dog as DogWrapper,
  Content,
} from './styled';

const Dog = ({
  adoptPet,
  lonelyDogs,
}) => (
  <div>
    {lonelyDogs.map((dog, index) => (
      <DogWrapper key={index} extraSpecial={dog.extraSpecial}>
        {!dog.imageUrl ? null : <Image technique="styledcomponents" size={125} pet={dog} />}
        <Content>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam cupiditate adipisci voluptatum iure cum voluptatem exercitationem quidem deleniti earum doloremque. Perspiciatis illo at dolor similique voluptatum nihil? Quam non, debitis.</p>
          <button onClick={() => adoptPet(dog)}>Adopt me</button>
        </Content>
      </DogWrapper>
    ))}
  </div>
);

Dog.propTypes = {
  adoptPet: PropTypes.func.isRequired,
  lonelyDogs: PropTypes.array.isRequired,
};

export default Dog;
