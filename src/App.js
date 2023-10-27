// src/App.js
import React from 'react';
import JobBoard from './Components/JobBoard';

function App() {
    return (
        <div className="App">
            <h1 className='heading'>Hacker News Job Board</h1>
            <JobBoard />
        </div>
    );
}

export default App;