import { connect } from 'react-redux';
import { CatsList } from '../components';

export default connect(
  state => ({
    cats: state.cats,
  }),
  () => ({
    foo: () => 'bar',
  }),
)(CatsList);
