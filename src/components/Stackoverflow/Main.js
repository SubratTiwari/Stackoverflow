import { FilterList } from '@mui/icons-material'
import React from 'react'
import AllQuestions from './AllQuestions'
import {Link} from 'react-router-dom';
import './css/Main.css';
function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link>
            <button>Ask Question</button>
          </Link>
        </div>
        <div className="main-dec">
          <p>All Question</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link>Newest</Link>
              </div>
              <div className="main-tab">
                <Link>Active</Link>
              </div>
              <div className="main-tab">
                <Link>More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterList />
              <p>filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="question">
            <AllQuestions/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main