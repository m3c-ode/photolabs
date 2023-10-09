import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon">
      <div onClick={props.onClick} className="photo-list__fav-icon-svg">
        <FavIcon selected={props.selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;