import React from 'react'
import {Link} from 'react-router-dom'
import AllQuestions from './AllQuestions';
import './CSS/Main.css'

function Main() {
  return (
    <div className='main'>
        <div className="main-container">
            <div className="main-top">
                <h2>All Questions</h2>
                <Link to='/ask-question'>
                <button>Ask Question</button>
                </Link>
            </div>
            <div className="main-dec">
                <p>No of Questions</p>
            </div>
        </div>
        <div className="questions">
            <div className="question">
                <AllQuestions/>
            </div>
        </div>
    </div>
  )
}

export default Main