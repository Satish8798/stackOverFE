import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import StarsIcon from '@mui/icons-material/Stars';
import WorkIcon from '@mui/icons-material/Work';
import './CSS/Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="single-option">
            <a>Home</a>
          </div>
          <div className="sidebar-option">
            <a>PUBLIC</a>
            <div className="link">
              <div className="link-tag">
                <PublicIcon />
                <a>Question</a>
              </div>
              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <StarsIcon/>
                <a>Explore Collectives</a>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <a>FIND A JOB</a>
            <div className="link">
              <div className="tags">
                <p>Jobs</p>
                <p>Companies</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>TEAMS</p>
            <div className="link">
              <div className="link-tag">
                <WorkIcon/>
                <a>Companies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
