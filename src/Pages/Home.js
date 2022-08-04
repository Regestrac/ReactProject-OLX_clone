import React from 'react';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';

import Header from '../Components/Header/Header';
import Posts from '../Components/Posts/Posts';


function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header/>
      <Banner/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default Home;
 