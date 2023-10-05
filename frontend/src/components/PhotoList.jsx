import React from "react";

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
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photoDataList.map(photoData =>
        <li key={photoData.id}>
          <PhotoListItem photoData={photoData} />
        </li>
      )}
    </ul>
  );
};

export default PhotoList;
