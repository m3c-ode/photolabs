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
    photos: [],
    topics: [],
    selectedPhoto: null,
    favorites: [],
    isModalVisible: false,
  };

  useEffect(() => {
    fetch("/api/photos")
      .then(response => {
        return response.json();
      }
      )
      .then(data => {
        setAppState({ type: ACTIONS.SET_PHOTO_DATA, value: data });
      });

    // return () => {
    //   second;
    // };
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then(response => {
        return response.json();
      }
      )
      .then(data => {
        setAppState({ type: ACTIONS.SET_TOPIC_DATA, value: data });
      });

    // return () => {
    //   second;
    // };
  }, []);


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
        break;
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
    console.log('inside the custom hook');
    return setAppState({ type: ACTIONS.SET_PHOTO_DATA, value: photoList });
  };

  // Return with useState
  return {
    appState,
    handleIconClick,
    // setState,
    setPhotoData,
    setIsModalVisible,
    setPhotoListData
  };

  // Return with useReducer
};

export default useApplicationData;
