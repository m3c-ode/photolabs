import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topicList, photoList }) => {

  const [favorites, setFavorites] = useState([]);
  console.log("🚀 ~ file: HomeRoute.jsx:12 ~ HomeRoute ~ favorites:", favorites);

  return (
    <div className="home-route">
      {/* {props.children} */}
      <TopNavigation>
        <TopicList topicList={topicList} />
        {/* IF there's a favorite, add to is */}
        <FavBadge isFavPhotoExist={!!favorites.length} />
      </TopNavigation>
      <PhotoList setFavorites={setFavorites} photoDataList={photoList} />
    </div>
  );
};

export default HomeRoute;
