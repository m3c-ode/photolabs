import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

/**
 * @param {Object} props
 * @param {TopicData} props.topicData 
 */
const TopicListItem = (props) => {
  const topicData = props.topicData;
  return (
    <div onClick={() => props.onClick(topicData.id)} className="topic-list__item">
      <span>{topicData.title}</span>
    </div>
  );
};


export default TopicListItem;
