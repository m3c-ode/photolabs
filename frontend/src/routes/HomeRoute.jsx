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
  const [selectedTopic, setSelectedTopic] = useState("");

  const { setPhotoListData, appState } = useApplicationData();

  const { photos: photoList } = appState;

  const handleFavoritesClicked = () => {
    setIsFavoritesSelected(!isFavoritesSelected);
  };

  // OR could add a selectTopic in useApplicationCustomHook??

  const onTopicClick = (topicId) => {
    setSelectedTopic(topicId);
  };

  useEffect(() => {
    if (selectedTopic !== '') {
      fetch(`/api/topics/photos/${selectedTopic}`)
        .then(response => response.json())
        .then(data => {
          setPhotoListData(data);
        })
        .catch(error => console.log('error updating photo data list', error));
    }
  }, [selectedTopic]);


  return (
    <div className="home-route">
      <TopNavigation>
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
