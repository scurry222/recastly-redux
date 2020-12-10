import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

var mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
  };
};

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.


export default VideoPlayerContainer;
