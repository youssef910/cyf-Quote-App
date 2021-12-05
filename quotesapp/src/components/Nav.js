import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = () => {
  const [activeItem, setActiveItem] = useState();
  const handleItemClick = (e, { name }) => setActiveItem({ name });

  return (
    <Menu pointing>
      <Menu.Item
        name='allQuotes'
        active={activeItem === 'allQuotes'}
        onClick={handleItemClick}
        as={Link}
        to='/home'
      />
      <Menu.Item
        name='RandomQuotes'
        active={activeItem === 'randomQuotes'}
        onClick={handleItemClick}
        as={Link}
        to='/random_quote'
      />
      <Menu.Item
        name='search'
        active={activeItem === 'search'}
        onClick={handleItemClick}
        as={Link}
        to='/search_quotes'
      />
    </Menu>
  );
};

export default Nav;
