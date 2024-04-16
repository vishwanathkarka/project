import React from 'react'
import "./Navigation.css"

import Setting from "../../assets/setting.svg";
import Notification from "../../assets/notification.svg";
import ProfilePic from "../../assets/profile-pic.png";
function Navigation() {
  return (
    <>
    <header>
      <div className='mobile-nav'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-baseline-density-medium" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718ebf" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 20h16" />
  <path d="M4 12h16" />
  <path d="M4 4h16" />
</svg>
</div>
    <h3  className="header-heading">Overview</h3>

    <div className="navigation desktop">
      <div className="search-input">
        <div className="search-logo">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718ebf" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
<path d="M21 21l-6 -6" />
</svg>
        </div>
        <input type="text" placeholder="Search for something" />
      </div>

      <div className="setting-icon">
        <img src={Setting} alt="" className='logo-header' />
      </div>
      <div className="notification">
        <img src={Notification} alt="" className='logo-header' />
      </div>
      <div className="profile-pic">
        <img src={ProfilePic} alt=""  className='logo-header'/>
      </div>
    </div>

  </header>
    <div className="search-input mobile">
    <div className="search-logo">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#718ebf" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
<path d="M21 21l-6 -6" />
</svg>
    </div>
    <input type="text" placeholder="Search for something" />
  </div>
  </>
  )
}

export default Navigation