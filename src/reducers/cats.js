import * as petConstants from '../constants/catConstants';

const initialState = {
  myCats: [],
  lonelyCats: [
    { id: 1, name: 'sims', type: 'cat', imageUrl: '/cat1.jpg' },
    { id: 2, name: 'mochi', type: 'cat', imageUrl: '/cat2.jpg' },
    { id: 3, name: 'goose', type: 'cat', imageUrl: '/cat3.jpg' },
  ],
};

const cats = (state = initialState, action) => {
  switch (action.type) {
    case petConstants.ADOPT_CAT:
      const addIndex = state.lonelyCats.indexOf(
        state.lonelyCats.filter(c => c.id === action.pet.id)[0],
      );

      return {
        ...state,
        myCats: [
          ...state.myCats,
          action.pet,
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
