import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      show_name: false
    };

    this.firstNameChanged = this.firstNameChanged.bind(this);
    this.formSubmitted = this.formSubmitted.bind(this);
  }

  firstNameChanged(event){
    this.setState({
      first_name: event.target.value,
      show_name: false
    })
  }

  formSubmitted(event){
    event.preventDefault();
    this.setState({
      show_name: true
    });
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.formSubmitted}>
          <div className="form-group">
          { this.state.show_name ? <h1> Hi, {this.state.first_name}</h1> : ''}
            <label htmlFor="first_name">First Name</label>
            <input
            onChange= {this.firstNameChanged}
            value={this.state.first_name}
            type="text"
            className="form-control"
            id="first_name"
            placeholder="Enter your name"/>
            <small id="NameHelp" className="form-text text-muted">Well never share your name with anyone else.</small>
          </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
    );
  }
}

export default App;
