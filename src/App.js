import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignOut from './pages/sign-in-sign-out/sign-in-sign-out.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser:null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInSignOut />} />
        </Routes>
      </div>
    );
  }
}

export default App;