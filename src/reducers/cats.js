import * as petConstants from '../constants/catConstants';

const initialState = {
  myCats: [],
  lonelyCats: [
    { id: 1, name: 'sims', type: 'cat' },
    { id: 2, name: 'mochi', type: 'cat' },
    { id: 3, name: 'goose', type: 'cat' },
  ],
};

const cats = (state = initialState, action) => {
  switch (action.type) {
    case petConstants.ADOPT_CAT:
      const addIndex = state.lonelyCats.indexOf(
        state.lonelyCats.filter(c => c.id === action.pet.id)[0],
      );

      const pet = {
        id: action.pet.id,
        name: action.pet.name,
        type: action.pet.type,
      };

      return {
        ...state,
        myCats: [
          ...state.myCats,
          pet,
        ],
        lonelyCats: [
          ...state.lonelyCats.slice(0, addIndex),
          ...state.lonelyCats.slice(addIndex + 1),
        ],
      };

    case petConstants.REMOVE_CAT:
      const removeIndex = state.myCats.indexOf(state.myCats.filter(c => c.id === action.pet.id)[0]);

      return {
        ...state,
        myCats: [
          ...state.myCats.slice(0, removeIndex),
          ...state.myCats.slice(removeIndex + 1),
        ],
        lonelyCats: [
          ...state.lonelyCats,
          action.pet,
        ],
      };

    default:
      return state;
  }
};

export default cats;
