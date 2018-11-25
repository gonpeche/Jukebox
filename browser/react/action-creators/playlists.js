import axios from 'axios';
import { RECEIVE_PLAYLISTS, RECEIVE_PLAYLIST, ADD_PLAYLIST, ADD_SONG_TO_PLAYLIST } from '../constants';

const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists,
});

const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist,
});

const addPlaylist = playlist => ({
  type: ADD_PLAYLIST,
  playlist
})

const addSongToPlaylist = song => ({
  type: ADD_SONG_TO_PLAYLIST,
  song,
})

export const fetchPlaylists = () => dispatch =>
  axios.get('/api/playlists')
    .then(res => res.data)
    .then(playlists => dispatch(receivePlaylists(playlists)));

export const fetchPlaylist = playlistId => dispatch =>
  axios.get(`/api/playlists/${playlistId}`)
    .then(res => res.data)
    .then(playlist => dispatch(receivePlaylist(playlist)));


export const createPlaylist = name => dispatch =>
  axios.post('/api/playlists', { name })
    .then(res => res.data)
    .then(playlist => {
      dispatch(addPlaylist(playlist));
      return playlist.id;
    });

export const addSong = id => (dispatch, getState) => {
  const { selected } = getState().playlists;
  return axios.post(`/api/playlists/${selected.id}/songs`, { id })
    .then(res => res.data)
    .then(song => dispatch(addSongToPlaylist(song)));
}

