import { connect } from 'react-redux';
import { Home } from '../components';

export default connect(
  state => ({
    state,
  }),
  () => ({
    foo: () => 'bar',
  }),
)(Home);
