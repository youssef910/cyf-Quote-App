import React, { Component } from "react";
import Button from "./Buttons";
class GetQuote extends Component {
  constructor() {
    super();
    this.state = { quote: {} };
  }
  gettingQuote = () => {
    fetch("https://afternoon-taiga-61637.herokuapp.com/quotes/random")
      .then((result) => result.json())
      .then((quotes) => this.setState({ quote: quotes }));
  };

  componentDidMount() {
    this.gettingQuote();
  }
  handleClickToGetQuote = (e) => {
    e.preventDefault();
    this.gettingQuote();
  };
  render() {
    return (
      <div>
        <div className='quote-body'>
          <blockquote
            className='quote-text'
            onClick={this.handleClickToGetQuote}
          >
            {" "}
            {this.state.quote.quote}
          </blockquote>
          <figcaption
            className='quote-author'
            onClick={this.handleClickToGetQuote}
          >
            {this.state.quote.author}
          </figcaption>
        </div>
        <Button
          onClick={this.handleClickToGetQuote}
          className='btn btn-success  '
          value='Get Quote'
        />
      </div>
    );
  }
}

export default GetQuote;
