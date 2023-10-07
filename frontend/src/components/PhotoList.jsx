import React, { useCallback, useState } from 'react';

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import { isSelected } from 'helpers';
/**
 * 
 * @param {Object} props 
 * @param {PhotoDataList[]} props.photoDataList
 * @param {PhotoDataList[]} props.favorites
 * @returns 
 */
const PhotoList = (props) => {
  const { photoDataList } = props;

  return (
    <ul className="photo-list">
      {photoDataList.map(photoData =>
        <li key={photoData.id}>
          <PhotoListItem
            key={photoData.id}
            photoData={photoData}
            setPhotoData={props.setPhotoData}
            iconClick={() => props.iconClick(photoData)}
            selected={props.favorites ? isSelected(photoData.id, props.favorites) : false}
            displayModal={props.displayModal}
          />
        </li>
      )}
    </ul>
  );
};

export default PhotoList;
