import React, { useState } from 'react';
import { Card, Container, Icon } from 'semantic-ui-react';

const server = 'https://amber-wary-art.glitch.me';
// const server = "http://localhost:36297";
const SearchQuotes = () => {
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchInput = (event) => {
    setSearchWord(event.target.value);
  };

  const handleSearchResult = () => {
    fetch(`${server}/quotes/search?term=${searchWord}`)
      .then((res) => res.json())
      .then((result) => setSearchResults(result));
  };

  return (
    <Container>
      <label> search word</label>
      <input
        value={searchWord}
        onChange={handleSearchInput}
        placeholder='enter search word'
      ></input>
      <button onClick={handleSearchResult}>Search Quotes</button>
      {searchResults.map((quote, index) => (
        <Card key={index}>
          <Card.Content>"{quote.quote}" </Card.Content>
          <Card.Content extra>
            <Icon name='comments' /> {quote.author}
          </Card.Content>
        </Card>
      ))}
    </Container>
  );
};

export default SearchQuotes;
