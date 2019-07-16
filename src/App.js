import React from 'react';

import './App.css';

import Challenge from './container/Challenge';
import Loopslesson from './container/lessons/Loopslesson';
import Opearatorlesson from './container/lessons/Operatorlesson'
function App() {
  return (
    <div>
      <Challenge number={4}/>
    </div>
  );
}

export default App;
