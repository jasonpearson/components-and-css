import { connect } from 'react-redux';
import CatsList from './CatsList';
import * as petActions from '../../actions/petActions';

export default connect(
  state => ({
    lonelyCats: state.cats.lonelyCats,
  }),
  dispatch => ({
    adoptPet: pet => dispatch(petActions.adoptPet(pet)),
  }),
)(CatsList);
