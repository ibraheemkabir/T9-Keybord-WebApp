import {createStore,applyMiddleware} from 'redux';
import {rootReducer} from './reducer';
import { createLogger } from 'redux-logger';

export const store = createStore(rootReducer,undefined,applyMiddleware(createLogger()))