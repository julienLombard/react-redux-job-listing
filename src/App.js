import React from 'react';
import './App.css';
import { List } from './components/list/List';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <h1>Job Listing</h1>
        <List />
      </main>
    </div>
  );
}

export default App;
