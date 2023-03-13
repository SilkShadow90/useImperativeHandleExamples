import React from 'react';
import './App.css';
import { ReduxContainer } from './containers/ReduxContainer';
import { PropsContainer } from './containers/PropsContainer';
import { HookContainer } from './containers/HookContainer';
import { PropsWithStateContainer } from './containers/PropsWithStateContainer';
import { HookWithReduxContainer } from './containers/HookWithReduxContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          <ReduxContainer />
          <PropsContainer />
          <div>
            <HookContainer />
            <HookWithReduxContainer />
          </div>
          <PropsWithStateContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
