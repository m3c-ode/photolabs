import React, { useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {

  const [selected, setSelected] = useState(false);
  const handleIconClick = () => {
    setSelected(!selected);
  };
  return (
    <div onClick={handleIconClick} className='fav-badge'>
      <FavIcon selected={selected} displayAlert={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;