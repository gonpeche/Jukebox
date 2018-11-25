import axios from 'axios';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../constants';

const receiveAlbums = (albums) => ({
  type: RECEIVE_ALBUMS,
  albums,
});

const receiveAlbum = (album) => ({
  type: RECEIVE_ALBUM,
  album,
});

export const fetchAlbums = () => dispatch =>
  axios.get('/api/albums')
    .then(res => res.data)
    .then(albums => dispatch(receiveAlbums(albums)));

export const fetchAlbum = id => dispatch =>
  axios.get(`/api/albums/${id}`)
    .then(res => res.data)
    .then(album => dispatch(receiveAlbum(album)));