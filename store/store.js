import { configureStore } from '@reduxjs/toolkit';

import listReducer from './list';


export const store = configureStore({
  reducer: {
    list: listReducer
  }
});

