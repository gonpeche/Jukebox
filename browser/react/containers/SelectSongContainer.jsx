import React from 'react';
import axios from 'axios';
import SelectSong from '../components/SelectSong';
import { fetchSongs } from '../action-creators/songs';

export default class SelectSongContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSong: null,
      error: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      selectedSong: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addSong(this.state.selectedSong)
      .then(() => this.setState({ error: false }))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    return (
      <SelectSong
        songs={this.props.songs}
        selectedSong={this.state.selectedSong}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    );
  }
}