import { connect } from 'react-redux';
import App from './App';
import * as petActions from '../../actions/petActions';

export default connect(
  state => ({
    myPets: state.myPets,
  }),
  dispatch => ({
    removePet: pet => dispatch(petActions.removePet(pet)),
  }),
)(App);
