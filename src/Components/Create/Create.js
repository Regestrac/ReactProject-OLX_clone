import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const date=Date();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const storage = getStorage();
    const storageRef = ref(storage, `/image/${image.name}`);
    uploadBytes (storageRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    }
  ).then(()=>{
    getDownloadURL(ref(storage, `/image/${image.name}`)).then((url) => {
      console.log('url is: '+ url);
      firebase.firestore().collection('products').add({
        name,
        category,
        price,
        url,
        userId:user.uid,
        createdAt:date,
      })
    })
    navigate('/');
  })
  }
  
  return (
    <Fragment>
      <Header />
      <div>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input className="input" type="text" id="fname" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input className="input" type="text" id="fname" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
          <br />
          <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button className="uploadBtn" value={user} onClick={handleSubmit}>Upload and Submit</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;