import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topicList, photoList, displayModal, setPhotoData, iconClick, selected, favorites, setFavorites }) => {

  const [isFavoritesSelected, setIsFavoritesSelected] = useState(false);
  console.log("🚀 ~ file: HomeRoute.jsx:12 ~ HomeRoute ~ favorites:", favorites);


  const handleFavoritesClicked = () => {
    setIsFavoritesSelected(!isFavoritesSelected);
  };


  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topicList={topicList} />
        <FavBadge
          onClick={handleFavoritesClicked}
          selected={isFavoritesSelected}
          isFavPhotoExist={!!favorites.length}
        />
      </TopNavigation>
      <PhotoList
        iconClick={iconClick}
        selected={selected}
        setFavorites={setFavorites}
        favorites={favorites}
        photoDataList={isFavoritesSelected ? favorites : photoList}
        displayModal={displayModal}
        setPhotoData={setPhotoData}
      />
    </div>
  );
};

export default HomeRoute;
