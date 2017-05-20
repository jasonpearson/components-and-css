import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Dog = ({
  adoptPet,
  ...props
}) => (
  <div className={styles.Dog}>
    {!props.imageUrl ? null : <img src={props.imageUrl} width={150} />}
    <button onClick={() => adoptPet(props)}>Adopt me</button>
  </div>
);

Dog.propTypes = {
  adoptPet: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
};

Dog.defaultProps = {
  imageUrl: null,
};

export default Dog;
