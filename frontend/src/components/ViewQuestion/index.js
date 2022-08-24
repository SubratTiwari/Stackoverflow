import React from 'react';
import '../Stackoverflow/css/index.css';
import MainQuestion from "./MainQuestion"
import Sidebar from '../Stackoverflow/Sidebar';
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