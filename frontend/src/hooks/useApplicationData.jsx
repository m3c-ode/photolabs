const { isSelected } = require("helpers");
const { default: photos } = require("mocks/photos");
const { default: topics } = require("mocks/topics");
const { useState, useReducer } = require("react");

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const useApplicationData = function(params) {

  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [photoData, setPhotoData] = useState(null);
  // const [favorites, setFavorites] = useState([]);

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
    photos: photos,
    topics: topics,
    selectedPhoto: null,
    favorites: [],
    isModalVisible: false,
  };

  // const [state, setState] = useState(initialState);

  // With useState
  // const handleIconClick = (photoData) => {
  //   // if already selected, remove from list (filter), or already present in the favorites list
  //   if (isSelected(photoData.id, state.favorites)) {
  //     setState((state) => ({ ...state, favorites: state.favorites.filter(photo => photo.id !== photoData.id) }));
  //   } else {
  //     setState((state) => ({ ...state, favorites: [...state.favorites, photoData] }));
  //   }
  //   // setSelected(!selected);
  // };

  // const setPhotoData = (photoData) => {
  //   return setState((prevState) => ({ ...prevState, selectedPhoto: photoData }));
  // };

  // const setIsModalVisible = () => {
  //   return setState((prevState) => ({ ...prevState, isModalVisible: !prevState.isModalVisible }));
  // };


  // with useReducer

  /**
  * 
  * @param {AppState} state 
  * @param {{type: string, value: Partial<AppState>}} action 
  */
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case ACTIONS.SELECT_PHOTO:
        return { ...state, selectedPhoto: action.value };
        break;
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return { ...state, isModalVisible: action.value };
        break;
      case ACTIONS.FAV_PHOTO_ADDED:
        return ({ ...state, favorites: [...state.favorites, action.value] });
      case ACTIONS.FAV_PHOTO_REMOVED:
        return ({ ...state, favorites: [...state.favorites.filter(photo => photo.id !== action.value.id)] });

      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
      // break;
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

  // Return with useState
  return {
    appState,
    handleIconClick,
    // setState,
    setPhotoData,
    setIsModalVisible
  };

  // Return with useReducer
};

export default useApplicationData;
