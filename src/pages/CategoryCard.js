import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper } from '../styled';

const CategoryCard = ({ id, name, description }) => {
  return (
    <CardWrapper>
      <Link to={`/products/${id}`}>
        <h3>{name}</h3>
        <h5>{description}</h5>
      </Link>
    </CardWrapper>
  );
};

export default CategoryCard;
