import React from 'react';
import PropTypes from 'prop-types';
// import Title from './styles';

const Cat = ({
  adoptPet,
  ...props
}) => (
  <div>
    <img src="http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg" width={150} />
    <button onClick={() => adoptPet(props)}>Adopt me</button>
  </div>
);

Cat.propTypes = {
  adoptPet: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Cat;
