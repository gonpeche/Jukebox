import React from 'react';
import store from '../store';
import { fetchArtist } from '../action-creators/artists';
import { start } from '../action-creators/player';
import Artist from '../components/Artist';

export default class ArtistContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    store.dispatch(fetchArtist(this.props.match.params.id));
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  start(song, list) {
    store.dispatch(start(song, list))
  }

  render () {
    return (
      <Artist
        url={this.props.match.url}
        path={this.props.match.path}
        artist={this.state.artists.selected}
        start={this.start}
        currentSong={this.state.player.currentSong}
      />
    );
  }
}