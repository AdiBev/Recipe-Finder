import React, { Component } from "react";

import { css } from "react-emotion";
import { PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: relative;
  top: 50px;
`;


export class RandomRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: false,
      error: false
    };
  }

  componentDidMount() {
    const API_KEY = "5d891a470c87b2ce4735978e2787fc7e";
    const API_KEY1 = "bd42de895b1050e562a19d4b6dd92534";
    const API_KEY2 = "0882376145a8bcae390107c5946c3cee";

    const rootURL = `https://www.food2fork.com/api/search?key=${API_KEY}`;
    fetch(`${rootURL}&q=vegan&count=50`)
      .then(response => response.json())
      .then(json => this.setState({ recipes: [json] }))
      .then(error => this.setState({ error: true }));
  }

  renderRecipe = recipeData => {
    if (recipeData.error === "limit") {
      return (
        <div className="container text-warning text-center">
          Sorry API call limit reached
        </div>
      );
    } else
      return recipeData.recipes.map(recipeName => {
        const rId = recipeName.recipe_id;
        return (
          <div className="container" key={rId}>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <a href={recipeName.source_url} target="_blank">
                  <img
                    src={recipeName.image_url}
                    className="mx-auto d-block img-fluid img-thumbnail"
                    alt={recipeName.title}
                  />
                  <span>
                    <h3>{recipeName.title}</h3>
                  </span>
                </a>
                <span>
                  <h3>{recipeName.publisher}</h3>
                </span>
              </div>
            </div>
          </div>
        );
      });
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.recipes ? (
          <div>
            <PacmanLoader
              className={override}
              sizeUnit={"px"}
              size={25}
              color={"rgb(255, 196, 5)"}
            />
          </div>
        ) : (
          this.state.recipes.map(this.renderRecipe)
        )}
      </React.Fragment>
    );
  }
}
