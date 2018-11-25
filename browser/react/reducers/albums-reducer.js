import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../constants';

const initialState = {
  list: [],
  selected: {},
}

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { selected: action.album });
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, { list: action.albums });
    default:
      return state;
  }
}