const { isSelected } = require("helpers");
const { useState, useReducer, useEffect } = require("react");

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const useApplicationData = function(params) {

  // Setting initial values for mock photos and topics

  /**
    * @typedef {{
    * photos: PhotoDataList[], 
    * topics: TopicData[], 
    * selectedPhoto: PhotoDataList, 
    * favorites: PhotoDataList[],
    * isModalVisible: boolean
    * }} AppState
  */
  /**
   * @type {AppState}
   */
  const initialState = {
    photos: [],
    topics: [],
    selectedPhoto: null,
    favorites: [],
    isModalVisible: false,
  };

  useEffect(() => {
    const photosPromise = fetch("/api/photos")
      .then(response => response.json())
      .then(photosData => photosData);
    const topicsPromise = fetch("/api/topics")
      .then(response => response.json())
      .then(topicsData => topicsData);

    Promise.all([
      photosPromise,
      topicsPromise
    ])
      .then(([photosData, topicsData]) => {
        setAppState({ type: ACTIONS.SET_PHOTO_DATA, value: photosData });
        setAppState({ type: ACTIONS.SET_TOPIC_DATA, value: topicsData });
      })
      .catch((error) => console.log('error with promises', error));
  }, []);

  /**
  * 
  * @param {AppState} state 
  * @param {{type: string, value: Partial<AppState>}} action 
  * @returns {AppState}
  */
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case ACTIONS.SELECT_PHOTO: {
        return { ...state, selectedPhoto: action.value };
        break;
      }
      case ACTIONS.DISPLAY_PHOTO_DETAILS: {
        return { ...state, isModalVisible: action.value };
      }
      case ACTIONS.FAV_PHOTO_ADDED: {
        return ({ ...state, favorites: [...state.favorites, action.value] });
      }
      case ACTIONS.FAV_PHOTO_REMOVED: {
        return ({ ...state, favorites: [...state.favorites.filter(photo => photo.id !== action.value.id)] });
      }
      case ACTIONS.SET_PHOTO_DATA: {
        return ({ ...state, photos: action.value });
      }
      case ACTIONS.SET_TOPIC_DATA: {
        return ({ ...state, topics: action.value });
      }
      default: {
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
        // break;
      }
    }
  };


  /**
   * @type {[AppState, function({type: string, value: Partial<AppState>})]}
   */
  const [appState, setAppState] = useReducer(reducerFunction, initialState);

  const handleIconClick = (photoData) => {
    // if already selected, remove from list (filter), or already present in the favorites list
    if (isSelected(photoData.id, appState.favorites)) {
      setAppState({ type: ACTIONS.FAV_PHOTO_REMOVED, value: photoData });
    } else {
      setAppState(({ type: ACTIONS.FAV_PHOTO_ADDED, value: photoData }));
    }
  };

  const setPhotoData = (photoData) => {
    return setAppState({ type: ACTIONS.SELECT_PHOTO, value: photoData });
  };

  const setIsModalVisible = (value) => {
    return setAppState({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, value: value });
  };

  const setPhotoListData = (photoList) => {
    return setAppState({ type: ACTIONS.SET_PHOTO_DATA, value: photoList });
  };

  return {
    appState,
    handleIconClick,
    setPhotoData,
    setIsModalVisible,
    setPhotoListData
  };

};

export default useApplicationData;
