import React from 'react';
import productsData from '../Database/products.json'
import MainPageLayout from '../Shop/MainPageLayout';
import HomeModal from './HomeModal';

function getProducts(productsArray) {
  const randomProducts = [-1, -1, -1, -1, -1];

  for (let i = 0; i < 5; i++) {
    // generate random index
    let x = Math.floor(Math.random() * productsArray.length);

    // generate another random index if object at this index is
    // already there in randomProducts array
    while (randomProducts.includes(productsArray[x])) {
      x = Math.floor(Math.random() * productsArray.length);
    }

    randomProducts[i] = productsArray[x];
  }

  return randomProducts;
}

const Home = () => {
  const products=getProducts(productsData);
  const obj=products.map(product =>(
    id:{product.id},
    
  ))
  return (
    <>
      <MainPageLayout>
        
        <HomeModal 
        
         />
      </MainPageLayout>
    </>
  );
};

export default Home;
