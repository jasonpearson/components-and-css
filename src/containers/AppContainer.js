import { connect } from 'react-redux';
import { App } from '../components';

export default connect(
  state => ({
    state,
  }),
  () => ({
    foo: () => 'bar',
  }),
)(App);
