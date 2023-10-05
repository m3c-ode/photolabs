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

  const displayModal = () => {

  };

  return (
    <div className="App">
      {/* {isModalVisible ?
        <PhotoDetailsModal
          displayModal={setIsModalVisible}
        />
        :
        <HomeRoute
          displayModal={setIsModalVisible}
          topicList={mockTopics}
          photoList={mockPhotos}
        />
      } */}

      <HomeRoute
        displayModal={setIsModalVisible}
        topicList={mockTopics}
        photoList={mockPhotos}
      />
      {isModalVisible && <PhotoDetailsModal displayModal={setIsModalVisible} />}
    </div>
  );
};

export default App;
