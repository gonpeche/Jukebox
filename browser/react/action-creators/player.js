import { START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, SET_PROGRESS } from '../constants';
import audio from '../audio';

const startPlaying = () => ({ type: START_PLAYING });

const stopPlaying = () => ({ type: STOP_PLAYING });

const setCurrentSong = (currentSong) => ({ 
  type: SET_CURRENT_SONG,
  currentSong
});

const setCurrentSongList = (currentSongList) => ({ 
  type: SET_LIST,
  currentSongList
});

const setProgress = progress => ({
  type: SET_PROGRESS,
  progress,
});

export const start = (song, list) => (dispatch) => {
  dispatch(setCurrentSong(song));
  dispatch(setCurrentSongList(list))
  dispatch(loadSong(song.audioUrl));
}

export const loadSong = audioUrl => (dispatch) => {
  audio.src = audioUrl;
  audio.load();
  dispatch(play());
}

export const play = () => (dispatch) => {
  audio.play();
  dispatch(startPlaying());
}

export const pause = () => (dispatch) => {
  audio.pause();
  dispatch(stopPlaying());
}

const findSongIndex = (currentSongList, currentSong) => {
  return currentSongList.findIndex(song => song.id === currentSong.id);
}

export const next = () => (dispatch, getState) => {
  const { currentSongList, currentSong } = getState().player
  let index = findSongIndex(currentSongList, currentSong) + 1;
  if (index > currentSongList.length - 1) {
    index = 0 
  }
  const song = currentSongList[index];
  dispatch(setCurrentSong(song));
  dispatch(loadSong(song.audioUrl));
}

export const previous = () => (dispatch, getState) => {
  const { currentSongList, currentSong } = getState().player
  let index = findSongIndex(currentSongList, currentSong) - 1;
  if (index < 0) {
    index = currentSongList.length - 1 
  }
  const song = currentSongList[index];
  dispatch(setCurrentSong(song));
  dispatch(loadSong(song.audioUrl));
}

export const addListeners = () => (dispatch) => {
  audio.addEventListener('timeupdate', () => {
    dispatch(setProgress(100 * audio.currentTime / audio.duration))
  });
  audio.addEventListener('ended', () => {
    dispatch(next());
  });
}