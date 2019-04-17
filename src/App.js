import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import WppButton from './components/WppButton/WppButton'
import Router from './Router'

import './App.scss';

export default function App(props) {
  return (
    <BrowserRouter>
      <Header />

      <Router />

      <Footer />
      
      <WppButton />
    </BrowserRouter>
  );
}
