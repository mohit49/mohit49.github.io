import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import HomeSlider from './component/HomeSlider';
import Header from './component/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import {Routes, Route , useParams} from "react-router-dom"
import Work from './Pages/Work';

import Footer from './component/Footer';
function App() {
 
  const [pageNem, setPageName] = useState();

  return (
    <>
    <Header/>
    <div className='float-container'>
    <HomeSlider currentPage={pageNem}/>
    <div className='right-container'>
      <Routes>
        <Route  path='/'  element={<Home setPageName={setPageName} />}/>
        <Route path='/about'  element={<About  setPageName={setPageName} />}/>
        <Route path='/work'  element={<Work setPageName={setPageName} />}/>
      </Routes>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default App;
