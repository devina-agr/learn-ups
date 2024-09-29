import React from 'react';
import './App.css';
import BackgroundComponent from './components/background';

function App() {
  return (

    <div className="min-h-screen">
      <BackgroundComponent>
        <div className="relative z-10">
          <h1 className="text-white text-center mt-20">Hello everyone</h1>
         
        </div>
      </BackgroundComponent>
    </div>
  );
}

export default App;
