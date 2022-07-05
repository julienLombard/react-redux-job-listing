import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { JobForm } from './components/JobForm/JobForm';
import JobsList from './features/jobsList/JobsList';
import { fetchAsyncJobsList } from './features/jobsList/jobsListSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncJobsList());
  }, [dispatch]);

  return (
    <div className="App">
      <main className="App-main">
        <h1>Job Listing</h1>
        <JobsList />
        <JobForm />
      </main>
    </div>
  );
}

export default App;
