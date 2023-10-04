import React from "react";

import "../styles/PhotoListItem.scss";



/**
 * @param {Object} props
 * @param {PhotoData} props.photoData 
 */
const PhotoListItem = (props) => {
  const photoData = props.photoData;
  /* Insert React */
  return (
    <div key={photoData.id} className="photo-list__item">
      <img className="photo-list__image" src={photoData.imageSource} alt="img" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.profile} alt="profile" />
        <article className="photo-list__user-info">
          <span>{photoData.username}</span>
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
