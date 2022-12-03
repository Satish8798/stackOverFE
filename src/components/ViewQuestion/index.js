import React from 'react';
import '../Body/CSS/index.css'
import MainQuestion from './MainQuestion.js';
import Sidebar from '../Body/Sidebar.js';

function index() {
  return (
    <div className="stack-index">
        <div className="stack-index-content">
            <Sidebar/>
            <MainQuestion/>
        </div>
    </div>
  )
}

export default index