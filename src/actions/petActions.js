import * as petConstants from '../constants/petConstants';

export const adoptPet = pet => ({
  type: petConstants.ADOPT_PET,
  pet,
});

export const removePet = pet => ({
  type: petConstants.REMOVE_PET,
  pet,
});
