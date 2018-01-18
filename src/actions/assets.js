import * as constants from './constants';

export const setAssets= (data) =>
  ({
    type: constants.SET_ASSETS,
    data,
  });
