import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';
import styles from './styles.css';

const Cats = ({
  lonelyCats,
  adoptPet,
}) => (
  <div className="CatsList">
    {lonelyCats.map((cat, index) => (
      <div key={index} className={classNames('Cat', { special: cat.extraSpecial })}>
        {!cat.imageUrl ? null : <Image technique="postcss" pet={cat} />}
        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam cupiditate adipisci voluptatum iure cum voluptatem exercitationem quidem deleniti earum doloremque. Perspiciatis illo at dolor similique voluptatum nihil? Quam non, debitis.</p>
          <button onClick={() => adoptPet(cat)}>Adopt me</button>
        </div>
      </div>
    ))}
  </div>
);

Cats.propTypes = {
  adoptPet: PropTypes.func.isRequired,
  lonelyCats: PropTypes.array.isRequired,
};

export default Cats;
