import React, { useState } from 'react';
import { Card, Container, Icon, Input, Button } from 'semantic-ui-react';

const server = 'https://amber-wary-art.glitch.me';
// const server = "http://localhost:36297";
const SearchQuotes = () => {
  const [searchWord, setSearchWord] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchInput = (event) => {
    setSearchWord(event.target.value);
  };

  const handleSearchResult = () => {
    searchWord &&
      fetch(`${server}/quotes/search?term=${searchWord}`)
        .then((res) => res.json())
        .then((result) => {
          setSearchResults(result);
          setSearchWord('');
        });
  };

  return (
    <Container textAlign='center'>
      <Input
        icon='search'
        focus
        value={searchWord}
        onChange={handleSearchInput}
        placeholder='Search Quotes'
        required
      />
      <Button onClick={handleSearchResult}>Search Quotes</Button>
      <Card.Group centered>
        {searchResults.map((quote, index) => (
          <Card key={index}>
            <Card.Content>"{quote.quote}" </Card.Content>
            <Card.Content extra>
              <Icon name='comments' /> {quote.author}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  );
};

export default SearchQuotes;
