import React from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import { fetchPlaylists } from '../action-creators/playlists';

export default class SidebarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      playlists: store.getState().playlists.list
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        playlists: store.getState().playlists.list,
      });
    });
    store.dispatch(fetchPlaylists());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Sidebar playlists={this.state.playlists} />
    );
  }
}
