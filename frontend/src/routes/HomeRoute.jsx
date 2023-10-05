import React, { useState } from 'react';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import FavBadge from 'components/FavBadge';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topicList, photoList }) => {

  const [favorites, setFavorites] = useState([]);

  return (
    <div className="home-route">
      {/* {props.children} */}
      <TopNavigation>
        <TopicList topicList={topicList} />
        {/* IF there's a favorite, add to is */}
        <FavBadge isFavPhotoExist={!!favorites.length} />
      </TopNavigation>
      <PhotoList photoDataList={photoList} />
    </div>
  );
};

export default HomeRoute;
