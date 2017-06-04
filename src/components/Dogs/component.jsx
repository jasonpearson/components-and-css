import React from 'react';
import PropTypes from 'prop-types';
import {
  Dog as DogWrapper,
  Image,
  Content,
} from './styles';

const Dog = ({
  adoptPet,
  lonelyDogs,
}) => (
  <div>
    {lonelyDogs.map((dog, index) => (
      <DogWrapper key={index} extraSpecial={dog.extraSpecial}>
        {!dog.imageUrl ? null : (
          <Image size={125}>
            <img src={dog.imageUrl} />
            <h3>{dog.name}</h3>
          </Image>
        )}
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
