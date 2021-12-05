import React, { useState, useEffect } from 'react';
import { Card, Icon, Button, Container } from 'semantic-ui-react';

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
    <Container textAlign='center'>
      <Card centered>
        <Card.Content>"{quote.quote}" </Card.Content>
        <Card.Content extra>
          <Icon name='comments' /> {quote.author}
        </Card.Content>
      </Card>
      <Button content='Primary'  primary onClick={handleGetNewQuote}>
        Get new Quote
      </Button>
    </Container>
  );
};

export default RandomQuote;
