import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  takeInput = (event) => {
    this.setState({
      query: event.target.value.toLowerCase(),
    });
  };

  moviesFilter = (movies, query) => movies
    .filter(movie => movie.title.toLowerCase().includes(query)
      || movie.description.toLowerCase().includes(query));

  render() {
    const { query } = this.state;
    const filteredMovies = this.moviesFilter(moviesFromServer, query);

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  onChange={this.takeInput}
                />
              </div>
            </div>
          </div>

          <MoviesList movies={filteredMovies} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
