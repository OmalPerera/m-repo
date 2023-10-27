import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './chatReducer';

const rootReducer = combineReducers({
  counterReducer: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
