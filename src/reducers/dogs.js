import * as petConstants from '../constants/petConstants';

const initialState = {
  myDogs: [],
  lonelyDogs: [
    { id: 1, name: 'bubba' },
    { id: 2, name: 'truman' },
    { id: 3, name: 'bandit' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case petConstants.ADOPT_PET:
      const addIndex = state.lonelyDogs.filter(d => d.id === action.pet.id);

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

    case petConstants.REMOVE_PET:
      const removeIndex = state.myDogs.filter(c => c.id === action.pet.id);

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
