import React, { useState, useEffect } from 'react';
import { Card, Container, Icon } from 'semantic-ui-react';
// import quoteBG from "./utilities/quoteBG.jpeg";
const server = 'https://amber-wary-art.glitch.me';
// const server = "http://localhost:38607";
function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(`${server}/quotes`)
      .then((res) => res.json())
      .then((quotes) => {
        console.log('got todolist from server', quotes);
        setQuotes(quotes);
      });
  }, []);
  return (
    <Container>
      <Card.Group>
        {quotes.map((quote, index) => (
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
}

export default Quotes;
