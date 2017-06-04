import { connect } from 'react-redux';
import Cats from './component';
import * as petActions from '../../actions/catActions';

export default connect(
  state => ({
    lonelyCats: state.cats.lonelyCats,
  }),
  dispatch => ({
    adoptPet: pet => dispatch(petActions.adoptCat(pet)),
  }),
)(Cats);
