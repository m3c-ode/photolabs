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

  // Setting intial values for mock photos and topics

  const [state, setState] = useState(
    /** 
     * @type {{
     * photos: PhotoDataList[], 
     * topics: TopicData[], 
     * selectedPhoto: PhotoDataList, 
     * favorites: PhotoDataList,
     * isModalVisible: boolean
     * }} 
    */
    ({
      photos: photos,
      topics: topics,
      selectedPhoto: null,
      favorites: [],
      isModalVisible: false,
    }));

  // const state = {
  //   photos: photos,
  //   topics: topics,
  //   selectedPhoto: photoData,
  //   favorites: favorites,
  //   isModalVisible
  // };

  // const reducerFunction = (state, action) => {
  //   switch (action.type) {
  //     case ACTIONS.SET_PHOTO_DATA:

  //       break;

  //     default:
  //       throw new Error(
  //         `Tried to reduce with unsupported action type: ${action.type}`
  //       );
  //       // break;
  //   }
  // }

  // const [state, setState] = useReducer(reducerFunction, initialState);

  const handleIconClick = (photoData) => {
    // if already selected, remove from list (filter), or already present in the favorites list
    if (isSelected(photoData.id, state.favorites)) {
      setState((state) => ({ ...state, favorites: state.favorites.filter(photo => photo.id !== photoData.id) }));
    } else {
      setState((state) => ({ ...state, favorites: [...state.favorites, photoData] }));
    }
    // setSelected(!selected);
  };

  // setPhotoData, similarly 

  const setPhotoData = (photoData) => {
    return setState((prevState) => ({ ...prevState, selectedPhoto: photoData }));
  };

  // setIsModalIsVisible

  const setIsModalVisible = () => {
    return setState((prevState) => ({ ...prevState, isModalVisible: !prevState.isModalVisible }));
  };

  return {
    state,
    handleIconClick,
    setState,
    setPhotoData,
    setIsModalVisible
  };
};

export default useApplicationData;
