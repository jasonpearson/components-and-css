import { connect } from 'react-redux';
import App from './component';

export default connect(
  state => ({
    myPets: [
      ...state.cats.myCats,
      ...state.dogs.myDogs,
    ],
  }),
)(App);
