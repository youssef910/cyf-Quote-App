import React, { Component } from "react";
import Button from "./Buttons";
class SearchQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      isSearching: false,
      searchParams: {
        searchQuote: "",
        searchAuthor: "",
      },
    };
  }

  renderSearchResults = () => {
    if (this.state.isSearching === false) {
      return <div>Search for qoute</div>;
    } else if (this.state.quotes.length !== 0) {
      return this.state.quotes.map((quote, index) => (
        <div key={index}>
          <p className='quote-text'>{quote.quote}</p>
          <h5 className='quote-author'>{quote.author}</h5>
        </div>
      ));
    } else {
      alert("No results to be Shown");
    }
  };

  handleSearch = (event) => {
    event.preventDefault();
    fetch(
      `https://afternoon-taiga-61637.herokuapp.com/quotes/search?term=${
        this.state.searchParams.searchQuote
      }&author=${this.state.searchParams.searchAuthor}`,
    )
      .then((result) => result.json())
      .then((quotes) => this.setState({ quotes: quotes, isSearching: true }));
  };
  handleSearchinputs = (event) => {
    const searchValues = this.state.searchParams;
    searchValues[event.target.name] = event.target.value;
    this.setState({ searchParams: searchValues, isSearching: false });
  };

  render() {
    console.log(
      this.state.searchParams.searchQuote +
        this.state.searchParams.searchAuthor,
    );
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            className='form-control'
            placeholder='Search By Word'
            type='text'
            name='searchQuote'
            onChange={this.handleSearchinputs}
          />
          <input
            className='form-control'
            placeholder='Search By Author'
            type='text'
            name='searchAuthor'
            onChange={this.handleSearchinputs}
          />
          <Button
            className='btn btn-outline-info'
            value='Search'
            onClick={this.handleSearch}
          />
        </form>
        <div className='search-results'>{this.renderSearchResults()}</div>
      </div>
    );
  }
}

export default SearchQuotes;
