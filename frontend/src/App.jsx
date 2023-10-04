import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = new Array(3).fill(<PhotoListItem photoData={sampleDataForPhotoListItem} />);
  return (
    <div className="App">
      <PhotoList />
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* {photos} */}
    </div>
  );
};

export default App;
