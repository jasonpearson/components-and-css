import { connect } from 'react-redux';
import MyPets from './component';
import * as catActions from '../../actions/catActions';
import * as dogActions from '../../actions/dogActions';

export default connect(
  state => ({
    myPets: [
      ...state.cats.myCats,
      ...state.dogs.myDogs,
    ],
  }),
  dispatch => ({
    removeCat: pet => dispatch(catActions.removeCat(pet)),
    removeDog: pet => dispatch(dogActions.removeDog(pet)),
  }),
)(MyPets);
