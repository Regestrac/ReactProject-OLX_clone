import React from 'react';
import Banner from '../Components/Banner/Banner';

import Header from '../Components/Header/Header';
import Posts from '../Components/Posts/Posts';

// import Footer from '../Components/Footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header/>
      <Banner/>
      <Posts/>
    </div>
  );
}

export default Home;
 