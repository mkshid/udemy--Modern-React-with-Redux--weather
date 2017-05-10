import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};

    // Without this the `this` inside of the function
    // wont be the `this` of the react class
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    // Clean the search bar
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
           placeholder="Get five day forcast in your favorite cities"
           className="form-control"
           onChange={this.onInputChange}
           value={this.state.term}
           />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

// It's null because there not mapStateToProps yet
export default connect(null, mapDispatchToProps)(SearchBar);
