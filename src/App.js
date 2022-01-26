import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import Widgets from './Widgets'
import './App.css';


function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
