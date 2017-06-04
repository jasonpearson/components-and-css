import * as petConstants from '../constants/dogConstants';

const initialState = {
  myDogs: [],
  lonelyDogs: [
    { id: 1, name: 'bubba', imageUrl: '/dog1.jpg' },
    { id: 2, name: 'truman', imageUrl: '/dog2.jpg', extraSpecial: true },
    { id: 3, name: 'bandit', imageUrl: '/dog3.jpg' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case petConstants.ADOPT_DOG:
      const addIndex = state.lonelyDogs.indexOf(
        state.lonelyDogs.filter(c => c.id === action.pet.id)[0],
      );

      return {
        ...state,
        myDogs: [
          ...state.myDogs,
          action.pet,
        ],
        lonelyDogs: [
          ...state.lonelyDogs.slice(0, addIndex),
          ...state.lonelyDogs.slice(addIndex + 1),
        ],
      };

    case petConstants.REMOVE_DOG:
      const removeIndex = state.myDogs.indexOf(state.myDogs.filter(c => c.id === action.pet.id)[0]);

      return {
        ...state,
        myDogs: [
          ...state.myDogs.slice(0, removeIndex),
          ...state.myDogs.slice(removeIndex + 1),
        ],
        lonelyDogs: [
          ...state.lonelyDogs,
          action.pet,
        ],
      };

    default:
      return state;
  }
};
