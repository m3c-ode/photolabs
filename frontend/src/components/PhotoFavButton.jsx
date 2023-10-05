import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  // const [selected, setSelected] = useState(false);
  // const handleIconClick = () => {
  //   setSelected(!selected);
  //   // setFavourites(...favourites,);
  // };

  return (
    <div className="photo-list__fav-icon">
      <div onClick={props.onClick} className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon displayAlert={!props.selected} selected={props.selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;