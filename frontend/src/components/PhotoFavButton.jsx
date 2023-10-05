import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [selected, setSelected] = useState(false);
  const handleIconClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="photo-list__fav-icon">
      <div onClick={handleIconClick} className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon displayAlert={!selected} selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;