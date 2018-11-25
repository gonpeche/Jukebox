import axios from 'axios';
import { SET_LYRICS } from '../constants';

const setLyrics = function (text) {
  return {
    type: SET_LYRICS,
    lyric: text
  };
};

export const fetchLyrics = function (artist, song) {
  return function (dispatch, getState) {
    axios.get(`/api/lyrics/${artist}/${song}`)
      .then(res => {
        dispatch(setLyrics(res.data.lyric));
      });
  };
};