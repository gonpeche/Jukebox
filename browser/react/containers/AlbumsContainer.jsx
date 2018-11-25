import React from 'react';
import store from '../store';
import { fetchAlbums } from '../action-creators/albums';
import Albums from '../components/Albums';

export default class AlbumContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    store.dispatch(fetchAlbums());
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render () {
    return  <Albums albums={this.state.albums.list} />;
  }
}