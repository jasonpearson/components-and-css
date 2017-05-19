import { connect } from 'react-redux';
import DogsList from './DogsList';
import * as petActions from '../../actions/petActions';

export default connect(
  state => ({
    lonelyDogs: state.cats.lonelyDogs,
  }),
  dispatch => ({
    adoptPet: pet => dispatch(petActions.adoptPet(pet)),
  }),
)(DogsList);
