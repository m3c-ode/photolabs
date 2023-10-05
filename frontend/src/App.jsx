import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = new Array(3).fill(<PhotoListItem photoData={sampleDataForPhotoListItem} />);

  const mockPhotos = photos;

  const mockTopics = topics;

  return (
    <div className="App">
      <HomeRoute>

        <TopNavigation>
          <TopicList topicList={mockTopics} />
          <FavBadge />
        </TopNavigation>
        <PhotoList photoDataList={mockPhotos} />
      </HomeRoute>
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* {photos} */}
    </div>
  );
};

export default App;
