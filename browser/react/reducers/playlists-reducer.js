import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, ADD_PLAYLIST, ADD_SONG_TO_PLAYLIST } from '../constants';

const initialState = {
  list: [],
  selected: {},
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_PLAYLISTS:
      return {
        ...state,
        list: action.playlists,
      };
    case RECEIVE_PLAYLIST:
      return {
        ...state,
        selected: action.playlist,
      };
    case ADD_PLAYLIST:
      return {
        ...state,
        list: [...state.list, action.playlist],
      };
    case ADD_SONG_TO_PLAYLIST:
      return {
        ...state,
        selected: {
          ...state.selected,
          songs: [...state.selected.songs, action.song],
        },
      };
    default:
      return state;
  }
};