import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

/**
 * @type {TopicData[]}
 */
const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

/**
 * 
 * @param {Object} props 
 * @param {TopicData[]} props.topicList 
 * @returns 
 */
const TopicList = (props) => {
  const { topicList } = props;
  return (
    <div className="top-nav-bar__topic-list">
      {topicList.map(topic => {
        return (
          <TopicListItem key={topic.id} topicData={topic} />
        );
      })}
    </div>
  );
};



export default TopicList;
