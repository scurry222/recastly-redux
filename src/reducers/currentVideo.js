import Redux from 'redux';

var currentVideoReducer = (state = {}, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'VIDEOS_FETCH_DATA_SUCCESS':
    return action.video;
  default:
    return state;
  }
};

export default currentVideoReducer;
