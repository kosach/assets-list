import * as constants from '../actions/constants';

export default (state, action) => {
  switch(action.type){
    case constants.SET_SERVICES: { 
      return [...action.data];
    }
    default:
      return state || [];  
  }
};
