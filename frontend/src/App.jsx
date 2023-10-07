import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { isSelected } from 'helpers';
import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    // dbState, handleIconClick, favorites, photoData, setPhotoData, isModalVisible, setIsModalVisible,
    state,
    handleIconClick,
    setState,
    setPhotoData,
    setIsModalVisible
  } = useApplicationData();

  const { photos, topics, favorites, isModalVisible, selectedPhoto } = state;

  return (
    <div className="App">
      <HomeRoute
        displayModal={setIsModalVisible}
        topicList={topics}
        photoList={photos}
        setPhotoData={setPhotoData}
        iconClick={handleIconClick}
        favorites={favorites}
      />
      {isModalVisible &&
        <PhotoDetailsModal
          iconClick={handleIconClick}
          selected={isSelected(selectedPhoto.id, favorites)}
          displayModal={setIsModalVisible}
          photoData={selectedPhoto}
        />}
    </div>
  );
};

export default App;
