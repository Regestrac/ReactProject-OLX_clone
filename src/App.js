import React,{useEffect,useContext} from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup'
import Login from './Pages/Login';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const {setUser} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
