import * as dogConstants from '../constants/dogConstants';

export const adoptDog = pet => ({
  type: dogConstants.ADOPT_DOG,
  pet,
});

export const removeDog = pet => ({
  type: dogConstants.REMOVE_DOG,
  pet,
});
