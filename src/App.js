import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Router from './Router'

import './App.css';

export default function App(props) {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
