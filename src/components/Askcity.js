import React from "react";
import Button from "react-bootstrap/Button";

export default class Askcity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }
  onChange = (event) => {
    let state = {};
    state[event.target.city] = event.target.value;
    this.setState(state);
  };

  onSubmit = (event) => {
    event.preventDefault();
    let city = this.state.city;
    this.props.greet(city);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="firstname">Which city</label>
        <input
          type="text"
          name="city"
          onChange={this.onChange}
          value={this.state.city}
        />
        <input type="submit" value="Show" />
      </form>
    );
  }
}
