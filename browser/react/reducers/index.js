import { combineReducers } from 'redux';
import lyricsReducer from './lyrics-reducer';
import playerReducer from './player-reducer';
import albumsReducer from './albums-reducer';
import artistsReducer from './artists-reducer';
import playlistsReducer from './playlists-reducer';
import songsReducer from './songs-reducer';

export default combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  playlists: playlistsReducer,
  songs: songsReducer,
});