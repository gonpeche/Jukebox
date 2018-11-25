import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../constants';

const initialState = {
  list: [],
  selected: {
    albums: [],
    songs: [],
  }
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ARTISTS:
      newState.list = action.artists;
      break;
    case RECEIVE_ARTIST:
      newState.selected = action.artist;
      newState.selected.albums = action.albums;
      newState.selected.songs = action.songs;
      break;
    default:
      return state;
  }
  return newState;
} 