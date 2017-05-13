const initialState = {
  myCats: [],
  lonelyCats: [
    { id: 1, name: 'sims' },
    { id: 2, name: 'mochi' },
    { id: 3, name: 'goose' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CAT':
      const addIndex = state.lonelyCats.filter(c => c.id === action.cat.id);

      return {
        ...state,
        myCats: [
          ...state.myCats,
          action.cat,
        ],
        lonelyCats: [
          ...state.myCats.slice(0, addIndex),
          ...state.myCats.slice(addIndex + 1),
        ],
      };

    case 'REMOVE_CAT':
      const removeIndex = state.myCats.filter(c => c.id === action.cat.id);

      return {
        ...state,
        myCats: [
          ...state.myCats.slice(0, removeIndex),
          ...state.myCats.slice(removeIndex + 1),
        ],
        lonelyCats: [
          ...state.lonelyCats,
          action.cat,
        ],
      };

    default:
      return state;
  }
};
