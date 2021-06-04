import React from 'react';
import './App.css';
import ComponentA from 'Components/ComponentA';

export const UserContext = React.createContext();
export const ColorContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={ 'Smith' }>
        <ColorContext.Provider value={ 'red' }>
          <ComponentA />
        </ColorContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
