import { RECEIVE_SONGS } from '../constants';


export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SONGS:
      return action.songs;
    default:
      return state;
  }
}