import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

/**
 * 
 * @param {Object} props 
 * @param {TopicData[]} props.topicList 
 * @param {function(*):void} props.onTopicClick 
 * @returns 
 */
const TopicList = (props) => {
  const { topicList } = props;
  return (
    <div className="top-nav-bar__topic-list">
      {topicList.map(topic => {
        return (
          <TopicListItem onClick={props.onTopicClick} key={topic.id} topicData={topic} />
        );
      })}
    </div>
  );
};



export default TopicList;
