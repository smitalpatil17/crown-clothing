import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignOut from './pages/sign-in-sign-out/sign-in-sign-out.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/signin' element={<SignInSignOut/>} />
      </Routes>
    </div>
  );
}

export default App;