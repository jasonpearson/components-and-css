import { connect } from 'react-redux';
import { CatsList } from '../components';

export default connect(
  state => ({
    lonelyCats: state.cats.lonelyCats,
  }),
  () => ({
    handleAdoption: () => 'bar',
  }),
)(CatsList);
