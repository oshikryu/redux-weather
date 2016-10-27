import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // all dom events come with an event obj as first arg
  onInputChange(evt) {
    this.setState({term: evt.target.value});
    return false;
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
    // fetch weather data
  }

  // pressing enter on a form element submits the content of a form (due to browser interpretation)
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input type="text"
          placeholder="Get a 5 day forecast in your city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        / >
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// binding container to action creator
// pass in null, redux is maintaining state but we do not care
export default connect(null, mapDispatchToProps)(SearchBar);
