import axios from 'axios';
import { RECEIVE_SONGS } from '../constants';

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs,
}); 

export const fetchSongs = () => dispatch =>
  axios.get('/api/songs')
    .then(res => res.data)
    .then(songs => dispatch(receiveSongs(songs)));