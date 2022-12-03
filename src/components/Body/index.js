import React from 'react';
import './CSS/index.css'
import Main from './Main.js';
import Sidebar from './Sidebar.js';

function index() {
  return (
    <div className="stack-index">
        <div className="stack-index-content">
            <Sidebar/>
            <Main/>
        </div>
    </div>
  )
}

export default index