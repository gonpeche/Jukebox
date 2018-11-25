import axios from 'axios';
import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../constants';

const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists,
});

const receiveArtist = (artist, songs, albums) => ({
  type: RECEIVE_ARTIST,
  artist,
  songs,
  albums,
});

export const fetchArtists = () => dispatch =>
  axios.get('/api/artists')
    .then(res => res.data)
    .then(artists => dispatch(receiveArtists(artists)));

export const fetchArtist = artistId => (dispatch) => {
  const artistPromise = axios.get(`/api/artists/${artistId}`)
  const songsPromise = axios.get(`/api/artists/${artistId}/songs`)
  const albumsPromise = axios.get(`/api/artists/${artistId}/albums`)
  Promise.all([artistPromise, songsPromise, albumsPromise])
    .then(responses => responses.map(res => res.data))
    .then(results => dispatch(receiveArtist(...results)));
}

