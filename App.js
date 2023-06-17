import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';

function App() {
  return (
    <div className="app">

      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed/>


      {/* Widgets */}
      <Widgets/> 

    </div>
  );
}

export default App;
