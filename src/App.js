import React from 'react';
import logo from './logo.svg';
import {AlertPop} from './framework'
import './App.css';
import { Button } from 'antd';
function App() {
  return (
    <div className="App">
      <div className="f-title"> 
          <h1>Labor Framework </h1>
      </div>
      <div className="error-button">
        <h2>Error AlertPop</h2>
        <ul className="error-button-steps">
          <li>Use <code>import {AlertPop} from './component/AlertPop'</code></li>
          <li><code>{'<Button onClick={()=>AlertPop("errorLocation","errorMsg","sourceName")} danger>Error Button</Button>'}</code></li>
        </ul>
        <Button className="" onClick={()=>AlertPop("errorLocation","errorMsg","sourceName")} danger>Error Button</Button>
      </div>
        <hr></hr>
    </div>
  );
}

export default App;
