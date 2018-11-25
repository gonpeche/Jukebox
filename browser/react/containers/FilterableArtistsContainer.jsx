import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import store from '../store';
import { fetchArtists } from '../action-creators/artists';

export default class FilterableArtistsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({
      inputValue: ''
    }, store.getState());
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
    store.dispatch(fetchArtists());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  render() {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.state.artists.list.filter(artist => artist.name.toLowerCase().match(inputValue.toLowerCase()));
    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={filteredArtists} />
      </div>
    )
  }
}