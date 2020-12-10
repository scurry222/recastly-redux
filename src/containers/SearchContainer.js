import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

var mapStateToProps = (state) => ({});

var mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => dispatch(handleVideoSearch(q)),
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.


export default SearchContainer;
