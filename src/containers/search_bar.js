import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};

    // Without this the `this` inside of the function
    // wont be the `this` of the react class
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <form className="input-group">
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
