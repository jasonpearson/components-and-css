import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import { Image as StyledImage } from './styled';

const Image = ({
  pet,
  size,
  technique,
}) => {
  let rendered;

  switch (technique) {
    case 'postcss':
      rendered = (
        <div className={styles.image}>
          <img src={pet.imageUrl} />
          <h3>{pet.name}</h3>
        </div>
      );
      break;

    case 'styledcomponents':
      rendered = (
        <StyledImage size={size}>
          <img src={pet.imageUrl} />
          <h3>{pet.name}</h3>
        </StyledImage>
      );
      break;

    default:
      rendered = <div>something went wrong</div>;
      break;
  }

  return rendered;
};

Image.propTypes = {
  pet: PropTypes.object.isRequired,
  size: PropTypes.number,
  technique: PropTypes.string.isRequired,
};

Image.defaultProps = {
  size: null,
};

export default Image;
