import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import  {TagsInput}  from "react-tag-input-component";
import './CSS/Question.css'

function Questions() {
  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="question-head">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="input-fields">
            <div className="input-field">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you are asking a question to another person
                </small>
                <input type="text" placeholder='Add question title here...' />
              </div>
            </div>
            <div className="input-field">
              <div className="title">
                <h3>What are the details of your probelm?</h3>
                <small>
                  Introduce the problem and expand on what you put in the title. Minimum 20 characters
                </small>
                <ReactQuill theme="snow" className='react-quill' />
              </div>
            </div>
            <div className="input-field">
              <div className="title">
                <h3>Tags</h3>
                <small>
                 Add tags to describe what your question is about
                </small>
                <input type="text"placeholder='enter tags' />
              </div>
            </div>
          </div>
        </div>
        <button className="button">Add your question</button>
      </div>
    </div>
  )
}

export default Questions