import React, { Component } from "react";
import { getRecipe } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class RecipeInput extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    console.log(this.state);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.getRecipe(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter a keyword!"
          className="form-control input-sm"
          value={this.state.term}
          onChange={this.onInputChange}
        />
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
  return bindActionCreators({ getRecipe }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecipeInput);
