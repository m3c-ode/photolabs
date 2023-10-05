import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {



  const mockPhotos = photos;

  const mockTopics = topics;

  return (
    <div className="App">
      {/* <HomeRoute>
        <TopNavigation>
          <TopicList topicList={mockTopics} />
          // {/* IF there's a favorite, add to is
          <FavBadge isFavPhotoExist={!!favorites.length}/>
        </TopNavigation>
        <PhotoList photoDataList={mockPhotos} />
      </HomeRoute> */}
      <HomeRoute topicList={mockTopics} photoList={mockPhotos} />
    </div>
  );
};

export default App;
