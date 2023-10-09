import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { isSelected } from 'helpers';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    appState,
    handleIconClick,
    setPhotoData,
    setIsModalVisible,
  } = useApplicationData();

  const { topics, favorites, isModalVisible, selectedPhoto } = appState;


  return (
    <div className="App">
      <HomeRoute
        displayModal={setIsModalVisible}
        topicList={topics}
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
          setPhotoData={setPhotoData}
          favorites={favorites}
        />}
    </div>
  );
};

export default App;
