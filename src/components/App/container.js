import { connect } from 'react-redux';
import App from './App';

export default connect(
  state => ({
    myPets: [
      ...state.cats.myCats,
      ...state.dogs.myDogs,
    ],
  }),
)(App);
