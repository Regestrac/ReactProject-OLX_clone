import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/postContext';
import './Post.css';

function Posts() {
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const {setPostDetails}=useContext(PostContext)
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allpost = snapshot.docs.map((products) => {
        return {
          ...products.data(),
          id: products.id
        }
      })
      setProducts(allpost)
    })
  }, [])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            products.map(product => {
              return (
                <div className="card" onClick={()=>{navigate('/view')}}>
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.url} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name">{product.name}</p>
                  </div>
                  <div className="date1">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {
            products.map(product => {
              return (
                <div className="card">
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={product.url} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name"> {product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Posts;
