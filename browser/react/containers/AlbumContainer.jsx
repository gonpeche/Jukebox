import React from 'react';
import store from '../store';
import { start } from '../action-creators/player'
import { fetchAlbum } from '../action-creators/albums';
import SingleAlbum from '../components/SingleAlbum';

export default class AlbumsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    store.dispatch(fetchAlbum(this.props.match.params.id));
  }

  componentWillUnmount(){
    this.unsubscribe();
  }
  start(song, list) {
    store.dispatch(start(song, list));
  }

  render () {
    return (
      <SingleAlbum 
        currentSong={this.state.player.currentSong}
        start={this.start}
        album={this.state.albums.selected} 
      />
    );
  }
}