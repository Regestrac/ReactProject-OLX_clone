import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/postContext';
import { collection, query, where, getDocs } from "firebase/firestore";

import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}= useContext(PostContext)
  const {firebase}= useContext(FirebaseContext)
  useEffect(async()=>{
    const q =  query(collection(firebase.firestore(), "products"), where("id", "==", "1659971788365"))
    const querySnapshot =await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log("doc.data: ");
      console.log(doc.data());
      setUserDetails(doc.data())
    })
  })
  
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src="" alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; </p>
          <span></span>
          <p></p>
          <span></span>
        </div>
        
          <div className="contactDetails">
          <p>Seller details</p>
          <p></p>
          <p></p>
        </div>
        
      </div>
    </div>
  );
}
export default View;
