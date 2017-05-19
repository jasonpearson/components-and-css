import * as catConstants from '../constants/catConstants';

export const adoptCat = pet => ({
  type: catConstants.ADOPT_CAT,
  pet,
});

export const removeCat = pet => ({
  type: catConstants.REMOVE_CAT,
  pet,
});
