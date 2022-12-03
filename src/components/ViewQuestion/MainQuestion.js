import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import { Avatar } from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './CSS/index.css'

function MainQuestion() {
    const votingIconStyle={
        fontSize:"50px"
    }
  const [show, setShow] = useState(false);
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 style={{
            color:"red"
          }}>This Question title</h2>
          <Link to="/ask-question">
            <button style={{
                backgroundColor:"red"
            }}>Ask Question</button>
          </Link>
        </div>
        <div className="main-dec">
          <div className="info">
            <p>Time Stmp</p>
            <p>
              Active<span>today</span>
            </p>
            <p>viewwd 2 times</p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <ArrowDropUpIcon style={votingIconStyle} />
                <p className="arrow">0</p>
                <ArrowDropDownIcon style={votingIconStyle}  />
               {/*  <BookmarkIcon />
                <HistoryIcon /> */}
              </div>
            </div>
            <div className="question-answer">
             <div  style={{
                padding:"10px",
                borderRadius:"5px",
                border:"1px solid red",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
                maxHeight:"fit-content"
            }}>
             <p>This is question body</p>
              <div className="author">
                <small>asked Timestamp</small>
                <div className="auth-details">
                  {/* <Avatar /> */}
                  <p>author name</p>
                </div>
              </div>
             </div>
              <div className="comments">
                <div className="comment">
                  <p>
                    This is a comment- <span>User name</span>
                    <small>Timestamp</small>
                  </p>
                </div>
                <p 
                style={{
                    opacity:"0.5",
                    cursor:"pointer",
                }}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  add a comment
                </p>
                {show && (
                  <div className="title">
                    <textarea
                    style={
                        {
                            margin: "5px 0",
                            padding:"10px",
                            border: "1px solid rgba(0,0,0,0.2)",
                            borderRadius: "3px",
                            outline:"none"
                        }
                    }
                      placeholder="Add your comment"
                      rows="5"
                    ></textarea>
                    <button style={{
                        backgroundColor:"orange",
                        maxWidth:"fit-content"
                    }}>Add Comment</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div 
        style={{
            display:"flex",
            flexDirection:"column"
        }}
        className="all-questions">
          <p style={{
            fontWeight:"300",
            fontSize:"1.3rem",
            color:"green"
          }}>No of answers</p>
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <ArrowDropUpIcon  style={votingIconStyle}/>
                <p className="arrow">0</p>
                <ArrowDropDownIcon  style={votingIconStyle} />
              {/*   <BookmarkIcon />
                <HistoryIcon /> */}
              </div>
            </div>
            <div className="question-answer" style={{
                backgroundColor:"rgba(34, 255, 0, 0.020)",
                padding:"10px",
                borderRadius:"5px",
                border:"1px solid green",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
                maxHeight:"fit-content"
            }}>
              <p>This is answer body</p>
              <div className="author">
                <small>asked Timestamp</small>
                <div className="auth-details">
                  <Avatar />
                  <p>author name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-answer">
        <h3 style={{
            fontSize:"22px",
            margin: "10px 0",
            fontWeight:"400"

        }}>Your Answer</h3>
        <ReactQuill className="react-quill" theme="snow" 
        style={{
            height: "200px",
        }}/>
      </div>
      <button
      style={{
        width:"fit-content",
        marginTop:"50px"
      }}>Post your answer</button>
    </div>
  );
}

export default MainQuestion;
