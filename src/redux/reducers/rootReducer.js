import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { menuReducer } from './menuReducer';

export const rootReducer = combineReducers({ cartReducer, menuReducer });
