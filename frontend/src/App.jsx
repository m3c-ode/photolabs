import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { isSelected } from 'helpers';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const mockPhotos = photos;

  const mockTopics = topics;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [photoData, setPhotoData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleIconClick = (photoData) => {
    // if already selected, remove from list (filter), or already present in the favorites list
    if (isSelected(photoData.id, favorites)) {
      setFavorites((favorites) => favorites.filter(photo => photo.id !== photoData.id));
    } else {
      setFavorites((favorites) => [...favorites, photoData]);
    }
    // setSelected(!selected);
  };


  return (
    <div className="App">
      <HomeRoute
        displayModal={setIsModalVisible}
        topicList={mockTopics}
        photoList={mockPhotos}
        setPhotoData={setPhotoData}
        iconClick={handleIconClick}
        favorites={favorites}
        setFavorites={setFavorites}

      />
      {isModalVisible &&
        <PhotoDetailsModal
          iconClick={handleIconClick}
          selected={isSelected(photoData.id, favorites)}
          displayModal={setIsModalVisible}
          photoData={photoData}
        />}
    </div>
  );
};

export default App;
