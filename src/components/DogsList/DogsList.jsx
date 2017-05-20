import React from 'react';
import PropTypes from 'prop-types';
import Dog from '../Dog';

const renderDog = (props, dog, i) => <Dog key={i} {...dog} {...props} />;

const DogsList = ({
  lonelyDogs,
  ...passProps
}) => (
  <div className="DogsList">
    {lonelyDogs.map(renderDog.bind(null, passProps))}
  </div>
);

DogsList.propTypes = {
  lonelyDogs: PropTypes.array.isRequired,
};

export default DogsList;
