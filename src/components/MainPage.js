import React from 'react';
import Navbar from './Header/Navbar'
import Content from './Content/Content'
import Cards from './Cards/Cards'

function MainPage() {
  return (
    <div>
      <Navbar />
      <Content />
      <Cards />
    </div>
  );
}

export default MainPage;