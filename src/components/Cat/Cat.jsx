import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

const Cat = ({
  adoptPet,
  ...props
}) => (
  <div className={classNames('Cat', { special: props.extraSpecial })}>
    {!props.imageUrl ? null : (
      <div className={styles.image}>
        <img src={props.imageUrl} />
        <h3>{props.name}</h3>
      </div>
    )}
    <div className={styles.content}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam cupiditate adipisci voluptatum iure cum voluptatem exercitationem quidem deleniti earum doloremque. Perspiciatis illo at dolor similique voluptatum nihil? Quam non, debitis.</p>
      <button onClick={() => adoptPet(props)}>Adopt me</button>
    </div>
  </div>
);

Cat.propTypes = {
  adoptPet: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  extraSpecial: PropTypes.bool,
};

Cat.defaultProps = {
  imageUrl: null,
  extraSpecial: false,
};

export default Cat;
