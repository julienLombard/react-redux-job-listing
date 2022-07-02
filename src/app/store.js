import { configureStore } from '@reduxjs/toolkit';
import jobsListReducer from '../features/jobsList/jobsListSlice';

export const store = configureStore({
  reducer: {
    jobsList: jobsListReducer,
  },
});
