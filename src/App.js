import React from 'react'
import {Switch, Route, Link } from  'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import {Navbar} from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className="app">
        <Navbar />
        <div className="main">
            Main
        </div>
        <div className="footer">
            footer
        </div>
    </div>
  );
}

export default App;
