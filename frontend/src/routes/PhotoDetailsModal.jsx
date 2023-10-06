import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


/**
 * 
 * @param {Object} props 
 * @param {function(*):void} props.displayModal
 * @param {function(*):void} props.iconClick
 * @param {PhotoDataList} props.photoData
 * @returns 
 */
const PhotoDetailsModal = (props) => {

  const similarPhotos = Object.values(props.photoData.similar_photos);


  const photoData = props.photoData;



  return (
    <div className="photo-details-modal">
      <button onClick={() => props.displayModal(false)} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          onClick={() => props.iconClick(photoData)} selected={props.selected}
        />
        <img
          // onClick={handlePhotoClick}
          className="photo-details-modal__image" src={photoData.urls.full} alt="img" />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photoData.user.profile} alt="profile" />
          <article className="photo-details-modal__photographer-info">
            <span>{photoData.user.username}</span>
            <div className="photo-details-modal__photographer-location">{photoData.location.city}, {photoData.location.country}</div>
          </article>
        </div>
        <div className='photo-details-modal__header'>Similar Photos</div>
        {/* <div className="photo-details-modal__images"> */}
        <PhotoList photoDataList={similarPhotos} />
        {/* </div> */}
      </div>


    </div>
  );
};

export default PhotoDetailsModal;
