import React, { useCallback, useState } from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



/**
 * @param {Object} props
 * @param {PhotoData} props.photoData 
 */
const PhotoListItem = (props) => {
  const photoData = props.photoData;

  const [selected, setSelected] = useState(false);
  const handleIconClick = () => {
    // if already selected, remove from list (filter)
    if (selected) {
      props.setFavorites((favorites) => favorites.filter(photo => photo.id !== photoData.id));
    } else {
      props.setFavorites((favorites) => [...favorites, photoData]);
    }
    setSelected(!selected);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton onClick={handleIconClick} selected={selected} />
      <img className="photo-list__image" src={photoData.urls.regular} alt="img" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.user.profile} alt="profile" />
        <article className="photo-list__user-info">
          <span>{photoData.user.username}</span>
          <div className="photo-list__user-location">{photoData.location.city}, {photoData.location.country}</div>
        </article>
      </div>
    </div>


    // From the solution code
    // <div className="photo-list__item">
    //   {/* <PhotoFavButton toggleFavourite={props.toggleFavourite} photoId={props.photo.id} favourites={props.favourites} /> */}
    //   <img /* onClick={() => props.setDisplayModal(props.photo)} */ className="photo-list__image" src={photoData.imageSource} />
    //   <div className="photo-list__user-details ">
    //     <img className="photo-list__user-profile" src={photoData.profile} />
    //     <div className="photo-list__user-info">
    //       <span>{photoData.username}</span>
    //       <div className="photo-list__user-location">
    //         {photoData.location.city},
    //         {photoData.location.country}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PhotoListItem;
