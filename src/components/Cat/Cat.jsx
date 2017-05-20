import React from 'react';
import PropTypes from 'prop-types';
// import Title from './styles';

const Cat = ({
  adoptPet,
  ...props
}) => (
  <div>
    {!props.imageUrl ? null : <img src={props.imageUrl} width={150} />}
    <button onClick={() => adoptPet(props)}>Adopt me</button>
  </div>
);

Cat.propTypes = {
  adoptPet: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
};

Cat.defaultProps = {
  imageUrl: null,
};

export default Cat;
