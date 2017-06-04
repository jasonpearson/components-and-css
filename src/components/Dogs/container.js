import { connect } from 'react-redux';
import Dogs from './component';
import * as petActions from '../../actions/dogActions';

export default connect(
  state => ({
    lonelyDogs: state.dogs.lonelyDogs,
  }),
  dispatch => ({
    adoptPet: pet => dispatch(petActions.adoptDog(pet)),
  }),
)(Dogs);
