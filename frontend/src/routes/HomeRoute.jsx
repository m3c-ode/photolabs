import React, { useEffect, useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

import '../styles/HomeRoute.scss';
import useApplicationData from 'hooks/useApplicationData';

const HomeRoute = ({ topicList,
  // photoList,
  displayModal, setPhotoData, iconClick, selected, favorites }) => {

  const [isFavoritesSelected, setIsFavoritesSelected] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  // console.log("🚀 ~ file: HomeRoute.jsx:12 ~ HomeRoute ~ favorites:", favorites);

  const { setPhotoListData, appState } = useApplicationData();

  const { photos: photoList } = appState;

  const handleFavoritesClicked = () => {
    setIsFavoritesSelected(!isFavoritesSelected);
  };

  // Define a state var being : topicSelected
  // Pass it up from the TopicListItem
  // UseEffect here dependant on it., if topicSelected not null, call th fetch

  // OR could add a selectTopic in useApplicationCustomHook

  const onTopicClick = (topicId) => {
    console.log('click, topicId', topicId);
    setSelectedTopic(topicId);
  };

  useEffect(() => {
    if (selectedTopic !== '') {
      fetch(`/api/topics/photos/${selectedTopic}`)
        .then(response => response.json())
        .then(data => {
          console.log('photo data from topic', data);
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
