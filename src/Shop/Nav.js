/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
// import { List } from 'rsuite';
// import ListItem from 'rsuite/lib/List/ListItem';

import { NavLink, NavWrapper } from './Nav.styled';

// import NavItem from 'rsuite/lib/Nav/NavItem';
// import { Link } from 'react-router-dom';
// import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/categories', text: 'Categories' },
  { to: '/checkout', text: 'Checkout' },
];

const Navs = () => {
  const location = useLocation();
  return (
    <NavWrapper>
      {LINKS.map(item => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            className={item.to === location.pathname ? 'active' : ''}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </NavWrapper>
  );
};

export default memo(Navs);
