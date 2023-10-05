import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topicList, photoList, displayModal }) => {

  const [favorites, setFavorites] = useState([]);
  const [isFavoritesSelected, setIsFavoritesSelected] = useState(false);
  console.log("🚀 ~ file: HomeRoute.jsx:12 ~ HomeRoute ~ favorites:", favorites);


  const handleFavouritesClicked = () => {
    setIsFavoritesSelected(!isFavoritesSelected);
  };


  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topicList={topicList} />
        <FavBadge
          onClick={handleFavouritesClicked}
          selected={isFavoritesSelected}
          isFavPhotoExist={!!favorites.length}
        />
      </TopNavigation>
      <PhotoList
        setFavorites={setFavorites}
        photoDataList={isFavoritesSelected ? favorites : photoList}
        displayModal={displayModal}
      />
    </div>
  );
};

export default HomeRoute;
