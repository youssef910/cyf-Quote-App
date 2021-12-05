import React, { useState, useEffect } from 'react';
import { Card, Container, Icon, Button } from 'semantic-ui-react';

const RandomQuote = () => {
  const [quote, setQuote] = useState([]);
  const server = 'https://amber-wary-art.glitch.me';

  const handleGetNewQuote = () => {
    fetch(`${server}/quotes/random`)
      .then((res) => res.json())
      .then((quotes) => {
        setQuote(quotes);
      });
  };
  useEffect(() => handleGetNewQuote(), []);
  return (
    <Card centered>
      <Card.Content>"{quote.quote}" </Card.Content>
      <Card.Content extra>
        <Icon name='comments' /> {quote.author}
      </Card.Content>
      <Button content='Primary' primary onClick={handleGetNewQuote}>
        Get new Quote
      </Button>
    </Card>
  );
};

export default RandomQuote;
