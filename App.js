// src/App.js

import React from 'react';
import ResumeForm from './components/ResumeForm';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <h1>Resume Builder for Visually Impaired</h1>
      <ResumeForm />
      <Chatbot />
    </div>
  );
}

export default App;
