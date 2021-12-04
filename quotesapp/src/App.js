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
    <Container className='App'>
      <Nav />
      <Routes>
        <Route path='/all_quotes' element={<Quotes />} />
        <Route path='/random_quote' element={<RandomQuote />} />
        <Route Path='/search_quotes' element={<SearchQuotes />} />
      </Routes>
    </Container>
  );
}

export default App;
