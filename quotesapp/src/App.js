import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import RandomQuote from './components/RandomQuote';
import SearchQuotes from './components/SearchQuotes';
import Quotes from './components/Quotes';

import './App.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container fluid>
      <Nav />
      <Routes>
        <Route path='/home' exact element={<Quotes />} />
        <Route path='/random_quote' element={<RandomQuote />} />
        <Route path='/search_quotes' element={<SearchQuotes />} />
      </Routes>
    </Container>
  );
}

export default App;
