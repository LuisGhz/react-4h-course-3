import React from 'react';
import './App.css';
import ComponentA from 'Components/ComponentA';

export const NameContext = React.createContext();

function App() {
  return (
    <div className="App">
      <ComponentA />
    </div>
  );
}

export default App;
