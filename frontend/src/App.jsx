import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const mockPhotos = photos;

  const mockTopics = topics;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [photoData, setPhotoData] = useState(null);

  const displayModal = () => {

  };

  return (
    <div className="App">
      <HomeRoute
        displayModal={setIsModalVisible}
        topicList={mockTopics}
        photoList={mockPhotos}
        setPhotoData={setPhotoData}
      />
      {isModalVisible &&
        <PhotoDetailsModal displayModal={setIsModalVisible} photoData={photoData} />}
    </div>
  );
};

export default App;
