import { connect } from 'react-redux';
import { DogsList } from '../../components';

export default connect(
  state => ({
    state,
  }),
  () => ({
    foo: () => 'bar',
  }),
)(DogsList);
