import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import InboxIcon from "@mui/icons-material/Inbox";
import "./CSS/Header.css";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigateTo= useNavigate();
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
         {/*  <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/0/02/20150916153753%21Stack_Overflow_logo.svg/120px-Stack_Overflow_logo.svg.png"
            alt="logo"
            onClick={()=>{
              navigateTo('/');
            }}
          /> */}
         <Link to="/"><h2><span>Clone</span>Overflow</h2></Link>
{/*           <h3>Products</h3>
 */}        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <Avatar />
            <InboxIcon />
            <ReorderIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
