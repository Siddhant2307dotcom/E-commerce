import React from 'react';
import { FlexboxGrid, Divider } from 'rsuite';
import CategoriesData from '../Database/categories.json';
import CategoryCard from './CategoryCard';
import MainPageLayout from '../Shop/MainPageLayout';

const Categories = () => {
  return (
    <>
      <MainPageLayout>
        <FlexboxGrid>
          <Divider />
          <FlexboxGrid.Item
            colspan={4}
            style={{
              paddingTop: 10,
              columnCount: 2,
              columnGap: 5,
              rowGap: 5,
            }}
          >
            {CategoriesData.map(category => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
              />
            ))}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </MainPageLayout>
    </>
  );
};

export default Categories;
