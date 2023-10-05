import React from 'react';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      {props.children}
    </div>
  );
};

export default HomeRoute;
