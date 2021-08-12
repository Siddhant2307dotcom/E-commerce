import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  list-style: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding-left: 10px;
  color: #233542;

  :hover {
    color: blue;
  }
`;
