import React, { Component, createRef } from 'react';
import Home from './Home';
import { apiUrl } from '../../constants/config';

class HomeContainer extends Component {
  state = {
    movies: [],
  }; 

  searchInput = createRef();

  submitForm = (event) => {
    event.preventDefault();
    const query = this.searchInput.current.value;
  
    fetch(apiUrl(query)).then(resp => {
      resp.json().then(r => this.setState({movies : r.Search }));
        }).catch(err =>console.error(err))
  }

  render() {
    return <Home searchInput={this.searchInput} submitValue={this.submitForm} movies={this.state.movies}/>;
  }
}

export default HomeContainer;

