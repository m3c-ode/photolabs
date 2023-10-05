import React, { useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';


const FavBadge = ({ isFavPhotoExist, selected, onClick }) => {

  return (
    <div onClick={onClick} className='fav-badge'>
      <FavIcon selected={selected} displayAlert={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;