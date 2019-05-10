import React from 'react';
import { HashRouter } from "react-router-dom";

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ActionButton from './components/ActionButton/ActionButton'

import Router from './Router'

import './App.scss';

export default function App(props) {
  return (
    <HashRouter>
      <Header />

      <Router />

      <Footer />
      
      <ActionButton />
    </HashRouter>
  );
}
