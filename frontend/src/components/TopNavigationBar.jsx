import React from 'react';

import '../styles/TopNavigationBar.scss';


/**
 * 
 * @param {object} props 
 * @param {() => void} props.onClick
 * @param {React.ReactNode} props.children
 * @returns 
 */
const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span onClick={props.onClick} className="top-nav-bar__logo">PhotoLabs</span>
      {props.children}
    </div>
  );
};

export default TopNavigation;