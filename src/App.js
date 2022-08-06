import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Pages/Signup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
