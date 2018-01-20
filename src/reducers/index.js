import { combineReducers, } from 'redux';
import assets from './assetsReducer';

const appReducer = combineReducers(
    {
        assets,
    }
);

export default appReducer;
