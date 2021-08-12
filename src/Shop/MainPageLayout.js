import React from 'react';
import Navs from './Nav';
import Title from './Title';
// import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="SHOPAHOLICS"
        subtitle="Looking for something to spend your money on?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
