import React from 'react';
import PropTypes from 'prop-types';
import {
  Dog as DogWrapper,
  Image,
  Content,
} from './styles';

const Dog = ({
  adoptPet,
  ...props
}) => (
  <DogWrapper extraSpecial={props.extraSpecial}>
    {!props.imageUrl ? null : (
      <Image>
        <img src={props.imageUrl} />
        <h3>{props.name}</h3>
      </Image>
    )}
    <Content>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam cupiditate adipisci voluptatum iure cum voluptatem exercitationem quidem deleniti earum doloremque. Perspiciatis illo at dolor similique voluptatum nihil? Quam non, debitis.</p>
      <button onClick={() => adoptPet(props)}>Adopt me</button>
    </Content>
  </DogWrapper>
);

Dog.propTypes = {
  adoptPet: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  extraSpecial: PropTypes.bool,
};

Dog.defaultProps = {
  imageUrl: null,
  extraSpecial: false,
};

export default Dog;
