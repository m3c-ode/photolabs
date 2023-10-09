import React, { useEffect, useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

import '../styles/HomeRoute.scss';
import useApplicationData from 'hooks/useApplicationData';

const HomeRoute = ({ topicList,
  displayModal, setPhotoData, iconClick, selected, favorites }) => {

  const [isFavoritesSelected, setIsFavoritesSelected] = useState(false);

  const { appState, setSelectedTopic } = useApplicationData();

  const { photos: photoList } = appState;

  const handleFavoritesClicked = () => {
    setIsFavoritesSelected(!isFavoritesSelected);
  };

  const onTopicClick = (topicId) => {
    setSelectedTopic(topicId);
  };

  const onHomeLogoClick = () => {
    setSelectedTopic("");
  };

  return (
    <div className="home-route">
      <TopNavigation onClick={onHomeLogoClick}>
        <TopicList onTopicClick={onTopicClick} topicList={topicList} />
        <FavBadge
          onClick={handleFavoritesClicked}
          selected={isFavoritesSelected}
          isFavPhotoExist={!!favorites.length}
        />
      </TopNavigation>
      <PhotoList
        iconClick={iconClick}
        selected={selected}
        favorites={favorites}
        photoDataList={isFavoritesSelected ? favorites : photoList}
        displayModal={displayModal}
        setPhotoData={setPhotoData}
      />
    </div>
  );
};

export default HomeRoute;
