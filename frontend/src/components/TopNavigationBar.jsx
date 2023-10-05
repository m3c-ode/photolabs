import React from 'react';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {props.children}
    </div>
  );
};

export default TopNavigation;