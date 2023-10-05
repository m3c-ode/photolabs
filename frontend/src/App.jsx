import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = new Array(3).fill(<PhotoListItem photoData={sampleDataForPhotoListItem} />);
  return (
    <div className="App">
      <HomeRoute>

        <TopNavigation>
          <TopicList />
          <FavBadge />
        </TopNavigation>
        <PhotoList />
      </HomeRoute>
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* {photos} */}
    </div>
  );
};

export default App;
