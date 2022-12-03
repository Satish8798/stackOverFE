import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/AllQuestions.css';

function AllQuestions() {
  return (
    <div className="all-questions">
        <div className="all-questions-container">
            <div className="all-questions-left">
                <div className="all-options">
                    <div className="all-option">
                        <p>0 </p>
                        <span>Votes</span>
                    </div>
                    <div className="all-option">
                        <p>0 </p>
                        <span>answers</span>
                    </div>
                    <div className="all-option">
                        <small>0 Views</small>
                    </div>
                </div>
            </div>
            <div className="question-answer">
                <Link to='/question'>This is question title</Link>
                <div style={{
                    width: "90%"
                }}>
                    <div>
                    This is Answer
                    </div>
                    <div style={{
                        display:"flex"
                    }}>
                        <span className='question-tags'>
                            react
                        </span>
                        <span className='question-tags'>
                            antd
                        </span>
                        <span className='question-tags'>
                            front end
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllQuestions