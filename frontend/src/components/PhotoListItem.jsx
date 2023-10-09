import React, { useCallback, useState } from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



/**
 * @param {Object} props
 * @param {PhotoData} props.photoData 
 * @param {*} props.displayModal 
 * @param {*} props.setFavorites 
 * @param {*} props.setPhotoData 
 */
const PhotoListItem = (props) => {
  const photoData = props.photoData;

  const handlePhotoClick = () => {
    props.displayModal(true);
    props.setPhotoData(photoData);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton onClick={props.iconClick} selected={props.selected} />
      <img onClick={handlePhotoClick} className="photo-list__image" src={photoData.urls.regular} alt="img" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.user.profile} alt="profile" />
        <article className="photo-list__user-info">
          <span>{photoData.user.username}</span>
          <div className="photo-list__user-location">{photoData.location.city}, {photoData.location.country}</div>
        </article>
      </div>
    </div>

  );
};

export default PhotoListItem;
