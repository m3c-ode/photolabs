import React, { useCallback, useState } from 'react';

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
/**
 * 
 * @param {Object} props 
 * @param {PhotoDataList[]} props.photoDataList
 * @returns 
 */
const PhotoList = (props) => {
  const { photoDataList } = props;

  const [selected, setSelected] = useState(false);


  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photoDataList.map(photoData =>
        <li key={photoData.id}>
          <PhotoListItem
            key={photoData.id}
            // favorites={props.favorites}
            photoData={photoData}
            // onClick={handleIconClick}
            setFavorites={props.setFavorites}
            displayModal={props.displayModal}
          // selected={selected}
          />
        </li>
      )}
    </ul>
  );
};

export default PhotoList;
