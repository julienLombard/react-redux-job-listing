import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { JobForm } from './components/jobForm/JobForm';
import { Header } from './components/header/Header';
import JobsList from './features/jobsList/JobsList';
import { fetchAsyncJobsList } from './features/jobsList/jobsListSlice';

function App() {
  const dispatch = useDispatch();
  const scrollToList = useRef(null);
  const scrollToForm = useRef(null);

  useEffect(() => {
    dispatch(fetchAsyncJobsList());
  }, [dispatch]);

  return (
    <div className="App">
      <Header scrollToList={scrollToList} scrollToForm={scrollToForm} />
      <main className="App-main" ref={scrollToList}>
        <h1>Jobs Listing</h1>
        <JobsList />
        <p ref={scrollToForm}> </p>
        <JobForm />
      </main>
    </div>
  );
}

export default App;
