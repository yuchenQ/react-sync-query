import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import useQueryString from './useQueryString';

function App() {
  const [value, onSetValue] = useQueryString('water');
  return (
    <div className="App">
      <h1>Tabs and query string example:</h1>
      <Tabs activeKey={value} onSelect={onSetValue}>
        <Tab eventKey="water" title="Water" />
        <Tab eventKey="coffee" title="Coffee" />
        <Tab eventKey="tea" title="Tea" />
      </Tabs>
    </div>
  );
}

export default App;
