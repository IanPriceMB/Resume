import React from 'react';
import './App.css';
import { Header, Job, SubHeader } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader text="Work Experience" />
      <Job name='eSub Construction Software' />
    </div>
  );
}

export default App;
