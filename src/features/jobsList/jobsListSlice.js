import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../data/firebase.config.js';

export const fetchAsyncJobsList = createAsyncThunk(
  'jobsList/fetchAsyncJobsList',
  async () => {
    const jobsCol = collection(db, 'jobs');
    const jobSnapshot = await getDocs(jobsCol);
    const jobsList = jobSnapshot.docs.map((doc) => doc.data());
    return jobsList;
  }
);

const jobsListSlice = createSlice({
  name: 'jobsList',
  initialState: {
    jobsList: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAsyncJobsList.pending]: (state) => {
      console.log('Jobs list - Pending');
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchAsyncJobsList.fulfilled]: (state, { payload }) => {
      console.log('Jobs list - Fetched Successfully!');
      state.jobsList = payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [fetchAsyncJobsList.rejected]: (state) => {
      console.log('Jobs list - Rejected!');
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export const getjobsList = (state) => state.jobsList.jobsList;
export default jobsListSlice.reducer;
