import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

/**
 * @typedef PhotoData
 * @prop {string} id
 * @prop {Object} location
 * @prop {string} location.city
 * @prop {string} location.country
 * @prop {string} imageSource
 * @prop {string} username
 * @prop {string} profile
 * 
 */
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {

  const photos = new Array(3).fill(<PhotoListItem photoData={sampleDataForPhotoListItem} />);
  console.log("🚀 ~ file: App.jsx:32 ~ App ~ photos:", photos);
  return (
    <div className="App">
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {/* <PhotoListItem photoData={sampleDataForPhotoListItem} /> */}
      {photos}
    </div>
  );
};

export default App;
