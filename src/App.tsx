import React, { useMemo, useState } from 'react';
import './App.css';
import { ReduxContainer } from './containers/ReduxContainer';
import { PropsContainer } from './containers/PropsContainer';
import { HookContainer } from './containers/HookContainer';
import { PropsWithStateContainer } from './containers/PropsWithStateContainer';
import { HookWithReduxContainer } from './containers/HookWithReduxContainer';
import { SegmentControl } from './features/segmentControl/SegmentControl';

const titles = [
  'Props',
  'Props + State',
  'Props + Redux',
  'Hook',
  'Hook + Redux',
]

function App() {
  const [index, setIndex] = useState(0)

  const content = useMemo(() => {
    switch (index) {
      case 0: {
        return (
          <PropsContainer />
        )
      }
      case 1: {
        return (
          <PropsWithStateContainer />
        )
      }
      case 2: {
        return (
          <ReduxContainer />
        )
      }
      case 3: {
        return (
          <HookContainer />
        )
      }
      case 4: {
        return (
          <HookWithReduxContainer />
        )
      }
      default:
        return (
          <div className="grid">
            <ReduxContainer />
            <PropsContainer />
            <div>
              <HookContainer />
              <HookWithReduxContainer />
            </div>
            <PropsWithStateContainer />
          </div>
        )
    }
  }, [index])

  return (
    <div className="App">
      <header className="App-header">
        <SegmentControl currentIndex={index} onChange={setIndex} list={titles} widthItem={300} />
        <div style={{ flex: 1, width: '100%', paddingLeft: '48px', paddingRight: '48px', boxSizing: 'border-box' }}>
          {content}
        </div>
      </header>
    </div>
  );
}

export default App;
