import React from 'react';
import './App.css';
import HelloBack from './components/HelloBack';
import HelloWorld from './components/HelloWorld'; 

function App() {
    return ( 
    <>
      <HelloWorld/>
      <HelloBack> </HelloBack> 
      <HelloBack/>
    </> 
    );
}
  
export default App;
