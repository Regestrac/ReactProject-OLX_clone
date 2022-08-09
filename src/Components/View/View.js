import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import { collection, query, where, getDocs } from "firebase/firestore";
import './View.css';
import { PostContext } from '../../store/postContext';
import 'firebase/compat/firestore';

function View() {
  const [userDetails, setUserDetails] = useState("")
  const { postDetails } = useContext(PostContext)
  const { firebase } = useContext(FirebaseContext)
  async function getUser() {
    const { userId } = postDetails
    const querySnapshot = await getDocs(query(collection(firebase.firestore(), "users"), where("id", "==", userId)));
    return querySnapshot.forEach((doc) => {
      setUserDetails(doc.data())
    })
  }
  useEffect(() => {
    getUser()
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>

        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>

      </div>
    </div>
  );
}
export default View;
