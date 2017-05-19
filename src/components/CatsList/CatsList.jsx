import React from 'react';
import PropTypes from 'prop-types';
import Cat from '../Cat';

const renderCat = (props, cat, i) => <Cat key={i} {...cat} {...props} />;

const CatsList = ({
  lonelyCats,
  ...passProps
}) => (
  <div>
    {lonelyCats.map(renderCat.bind(null, passProps))}
  </div>
);

CatsList.propTypes = {
  lonelyCats: PropTypes.array.isRequired,
};

export default CatsList;
