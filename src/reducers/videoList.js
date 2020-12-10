import Redux from 'redux';
import {sampleVideoData as sampleData} from '../data/exampleVideoData.js';

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos;
  default:
    return [];
  }
};

export default videoListReducer;
